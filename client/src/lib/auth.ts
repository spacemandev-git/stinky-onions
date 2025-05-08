import { get } from 'svelte/store';
import { twitterProfile, type TwitterProfile } from '$lib/stores/twitter';
import { fetchCurrentUser } from './api';

/**
 * Loads the user's Twitter profile from cookies or API
 * @returns The current Twitter profile (if any)
 */
export async function loadTwitterProfile(): Promise<TwitterProfile | null> {
  try {
    // Check cookie first for immediate data
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('twitter_profile='));
      
    if (cookie) {
      try {
        const value = decodeURIComponent(cookie.split('=')[1]);
        const parsed = JSON.parse(value);
        twitterProfile.set(parsed);
        // Clear cookie after hydration for privacy
        document.cookie = 'twitter_profile=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      } catch (err) {
        console.error('Error parsing cookie', err);
      }
    } else {
      // If no cookie, fetch from auth server API
      const { twitterUserId } = await fetchCurrentUser();
      // If user is authenticated but we don't have profile, cookies might be missing client side info
      // You'd need to set up an endpoint on auth server to get full profile data if needed
    }
  } catch (error) {
    console.error('Error during auth check:', error);
  }

  // Return current profile from store
  return get(twitterProfile);
}

/**
 * Subscribes to Twitter profile changes
 * @param callback Function that receives the profile when it changes
 * @returns Unsubscribe function
 */
export function subscribeToProfile(callback: (profile: TwitterProfile | null) => void) {
  return twitterProfile.subscribe(callback);
}
