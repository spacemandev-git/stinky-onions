// Auth server configuration
export const AUTH_SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL || 'http://localhost:3001';

// API endpoints
export const API_ENDPOINTS = {
  AUTH_TWITTER: `${AUTH_SERVER_URL}/api/auth/twitter`,
  AUTH_TWITTER_CALLBACK: `${AUTH_SERVER_URL}/api/auth/twitter/callback`,
  USER: `${AUTH_SERVER_URL}/api/user`
};
