# Auth Server for Onionarchy

This is a TypeScript Express server that handles Twitter authentication and user session cookies, extracted from the original SvelteKit server endpoints. It is intended to be deployed as a standalone service (e.g., on Railway) alongside a static SvelteKit frontend.

## Endpoints

- `GET /api/auth/twitter` — Starts the Twitter OAuth flow (redirects to Twitter)
- `GET /api/auth/twitter/callback` — Handles the Twitter OAuth callback, sets cookies, and redirects to the frontend
- `GET /api/user` — Returns `{ twitterUserId }` if present in cookies

## Setup

1. Copy `.env.example` to `.env` and fill in your Twitter credentials and callback URL.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run in development:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build
   npm start
   ```

## Deployment
Deploy as a separate service from your static frontend. Set environment variables in Railway for Twitter keys and callback URL.

## Notes
- Make sure to set `FRONTEND_ORIGIN` in `.env` to your deployed frontend's URL for CORS.
- Cookies are set for both user ID and Twitter profile info.
