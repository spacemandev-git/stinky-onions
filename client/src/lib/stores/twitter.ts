import { writable } from 'svelte/store';

export type TwitterProfile = {
  user_id: string;
  screen_name: string;
  name: string;
  profile_image_url_https: string;
};

function createTwitterStore() {
  let initial: TwitterProfile | null = null;
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('twitter_profile');
    if (stored) initial = JSON.parse(stored);
  }
  const { subscribe, set } = writable<TwitterProfile | null>(initial);

  return {
    subscribe,
    set(profile: TwitterProfile | null) {
      set(profile);
      if (profile) {
        localStorage.setItem('twitter_profile', JSON.stringify(profile));
      } else {
        localStorage.removeItem('twitter_profile');
      }
    }
  };
}

export const twitterProfile = createTwitterStore();
