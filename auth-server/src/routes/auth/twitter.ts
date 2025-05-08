import express from 'express';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

// Ensure environment variables are loaded in this module
dotenv.config();

const router = express.Router();

const consumerKey = process.env.TWITTER_CONSUMER_API_KEY!;
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET!;
const callbackUrl = process.env.TWITTER_CALLBACK_URL!;

// Debug info to help troubleshoot
console.log('Twitter Auth Config:', { 
  hasConsumerKey: !!consumerKey, 
  hasConsumerSecret: !!consumerSecret, 
  callbackUrl 
});

const oauth = new OAuth({
  consumer: { key: consumerKey, secret: consumerSecret },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

// GET /api/auth/twitter
router.get('/', async (req, res) => {
  // Declare params outside try block for wider scope
  let params: Record<string, string> = {};
  
  try {
    // Verify required environment variables
    if (!consumerKey || !consumerSecret || !callbackUrl) {
      console.error('Missing required environment variables:', {
        hasConsumerKey: !!consumerKey,
        hasConsumerSecret: !!consumerSecret,
        callbackUrl
      });
      return res.status(500).send('Server configuration error: Missing Twitter API credentials');
    }

    // Log request details for debugging
    console.log('Twitter auth request started');
    
    // Create OAuth request parameters
    const oauthData = {
      url: 'https://api.twitter.com/oauth/request_token',
      method: 'POST',
      data: { oauth_callback: callbackUrl }
    };
    
    // Create OAuth header
    const authHeader = oauth.toHeader(oauth.authorize(oauthData));
    console.log('Auth header generated:', authHeader);
    
    // Step 1: Obtain a request token
    const response = await fetch('https://api.twitter.com/oauth/request_token', {
      method: 'POST',
      headers: {
        ...authHeader,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ oauth_callback: callbackUrl }) as any
    });

    // Check for unexpected HTTP errors
    if (!response.ok) {
      console.error(`Twitter API error: ${response.status} ${response.statusText}`);
      return res.status(500).send(`Twitter API error: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Twitter API response:', text);
    
    params = Object.fromEntries(new URLSearchParams(text));

    if (!params.oauth_token) {
      console.error('Missing oauth_token in Twitter response', params);
      return res.status(500).send('Failed to get request token from Twitter');
    }
  } catch (error) {
    console.error('Exception during Twitter auth:', error);
    return res.status(500).send('Internal server error during Twitter authentication');
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
  const profile = await profileRes.json() as any;
  const profileData = {
    user_id: params.user_id,
    screen_name: params.screen_name,
    name: profile.name || '',
    profile_image_url_https: profile.profile_image_url_https || ''
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

  // Get the frontend URL from environment variable or use default
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
  console.log(`Redirecting to frontend: ${frontendUrl}`);
  
  // Redirect to frontend app
  res.redirect(frontendUrl);
});

export default router;
