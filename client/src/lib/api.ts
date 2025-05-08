import { API_ENDPOINTS } from './config';
import type { TwitterProfile } from './stores/twitter';

/**
 * Fetches the current user from the auth server
 */
export async function fetchCurrentUser(): Promise<{ twitterUserId: string | null }> {
  try {
    const response = await fetch(API_ENDPOINTS.USER, {
      credentials: 'include' // Important for sending/receiving cookies
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    return { twitterUserId: null };
  }
}

/**
 * Redirects the user to Twitter OAuth flow
 */
export function redirectToTwitterAuth() {
  window.location.href = API_ENDPOINTS.AUTH_TWITTER;
}
