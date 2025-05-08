// Load env vars first, before any other imports
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import twitterAuthRouter from './routes/auth/twitter';

const app = express();
const PORT = process.env.PORT || 3001;
// Allow requests from development server and production URL
const FRONTEND_ORIGINS = [
  'http://localhost:5173',  // SvelteKit dev server
  'http://localhost:4173',  // SvelteKit preview server
  process.env.FRONTEND_ORIGIN,
].filter(Boolean) as string[];

console.log('Allowing CORS for origins:', FRONTEND_ORIGINS);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, etc)
      if (!origin) return callback(null, true);
      
      if (FRONTEND_ORIGINS.indexOf(origin) !== -1 || FRONTEND_ORIGINS.includes('*')) {
        callback(null, true);
      } else {
        console.warn(`Origin ${origin} not allowed by CORS`);
        callback(null, false);
      }
    },
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth/twitter', twitterAuthRouter);

app.get('/api/user', (req, res) => {
  // Equivalent to SvelteKit's load function that returns twitterUserId from cookies
  const twitterUserId = req.cookies['twitter_user_id'] || null;
  res.json({ twitterUserId });
});

// Health check endpoint for Railway deployment monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Auth server listening on port ${PORT}`);
});
