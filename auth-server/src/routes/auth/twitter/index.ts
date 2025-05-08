import express from 'express';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import fetch from 'node-fetch';

const router = express.Router();

const consumerKey = process.env.TWITTER_CONSUMER_API_KEY!;
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET!;
const callbackUrl = process.env.TWITTER_CALLBACK_URL!;

const oauth = new OAuth({
  consumer: { key: consumerKey, secret: consumerSecret },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

// GET /api/auth/twitter
router.get('/', async (req, res) => {
  // Step 1: Obtain a request token
  const response = await fetch('https://api.twitter.com/oauth/request_token', {
    method: 'POST',
    headers: {
      ...oauth.toHeader(
        oauth.authorize({
          url: 'https://api.twitter.com/oauth/request_token',
          method: 'POST',
          data: { oauth_callback: callbackUrl }
        })
      ),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ oauth_callback: callbackUrl }) as any
  });

  const text = await response.text();
  const params = Object.fromEntries(new URLSearchParams(text));

  if (!params.oauth_token) {
    return res.status(500).send('Failed to get request token');
  }

  // Store the oauth_token_secret in a cookie for later use
  res.cookie('twitter_oauth_token_secret', params.oauth_token_secret, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // Set to true in production
    maxAge: 300 * 1000
  });

  // Redirect user to Twitter auth
  res.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${params.oauth_token}`);
});

// GET /api/auth/twitter/callback
router.get('/callback', async (req, res) => {
  const oauth_token = req.query.oauth_token as string;
  const oauth_verifier = req.query.oauth_verifier as string;
  const oauth_token_secret = req.cookies['twitter_oauth_token_secret'];

  if (!oauth_token || !oauth_verifier || !oauth_token_secret) {
    return res.status(400).send('Missing OAuth parameters');
  }

  // Step 2: Exchange request token for access token
  const response = await fetch('https://api.twitter.com/oauth/access_token', {
    method: 'POST',
    headers: {
      ...oauth.toHeader(
        oauth.authorize(
          {
            url: 'https://api.twitter.com/oauth/access_token',
            method: 'POST'
          },
          { key: oauth_token, secret: oauth_token_secret }
        )
      ),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      oauth_token,
      oauth_verifier
    }) as any
  });

  const text = await response.text();
  const params = Object.fromEntries(new URLSearchParams(text));

  if (!params.oauth_token || !params.user_id) {
    return res.status(500).send('Failed to get access token');
  }

  // Set user_id cookie (MVP)
  res.cookie('twitter_user_id', params.user_id, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: false, // Set to true in production
    maxAge: 60 * 60 * 24 * 7 * 1000 // 1 week
  });

  // Get user profile info
  const verifyUrl = 'https://api.twitter.com/1.1/account/verify_credentials.json';
  const profileRes = await fetch(verifyUrl, {
    method: 'GET',
    headers: {
      ...oauth.toHeader(
        oauth.authorize(
          {
            url: verifyUrl,
            method: 'GET'
          },
          { key: params.oauth_token, secret: params.oauth_token_secret }
        )
      )
    }
  });
  const profile = await profileRes.json();
  const profileData = {
    user_id: params.user_id,
    screen_name: params.screen_name,
    name: (profile as { name: string }).name,
    profile_image_url_https: (profile as { profile_image_url_https: string })
      .profile_image_url_https
  };
  res.cookie('twitter_profile', JSON.stringify(profileData), {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    secure: false, // Set to true in production
    maxAge: 60 * 60 * 24 * 7 * 1000 // 1 week
  });

  // Clear the temporary oauth_token_secret cookie
  res.clearCookie('twitter_oauth_token_secret', { path: '/' });

  // Redirect to home/dashboard
  res.redirect('/');
});

export default router;
