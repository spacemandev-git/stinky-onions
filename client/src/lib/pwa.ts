// PWA Registration and update handling
import { Workbox } from 'workbox-window';

// Register the service worker
export function registerSW() {
  // Skip registration in development mode
  const dev = import.meta.env.DEV;
  if (dev) {
    console.log('Service worker registration skipped in development mode');
    return null;
  }
  
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

    // Add event listeners to handle service worker updates
    wb.addEventListener('activated', (event) => {
      console.log('Service worker activated', event);
    });

    wb.addEventListener('waiting', (event) => {
      console.log('New service worker waiting', event);
      // You can prompt the user to refresh the page to apply updates
    });

    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        console.log('Service worker installed for the first time');
      } else {
        console.log('Service worker updated');
      }
    });

    // Register the service worker
    wb.register()
      .then((registration) => {
        console.log('Service worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });

    return wb;
  } else {
    console.warn('Service workers not supported in this browser');
    return null;
  }
}

/**
 * Check if the app is running as an installed PWA
 * 
 * This checks the display-mode media query to determine if the app is running
 * standalone (installed PWA) or in a browser
 * 
 * @returns {boolean} True if running as installed PWA, false if in browser
 */
export function isInstalledPwa(): boolean {
  // First check: display-mode media feature
  if (window.matchMedia('(display-mode: standalone)').matches || 
      window.matchMedia('(display-mode: fullscreen)').matches || 
      window.matchMedia('(display-mode: minimal-ui)').matches) {
    return true;
  }
  
  // Second check: navigator.standalone (for iOS Safari)
  if (
    'standalone' in window.navigator && 
    (window.navigator as any).standalone === true
  ) {
    return true;
  }
  
  // Otherwise, it's running in a browser
  return false;
}

/**
 * Get the current display mode of the application
 * 
 * @returns {string} The display mode ('browser', 'standalone', 'minimal-ui', 'fullscreen')
 */
export function getDisplayMode(): string {
  // Check all possible display-mode values
  const modes = ['fullscreen', 'standalone', 'minimal-ui'];
  
  for (const mode of modes) {
    if (window.matchMedia(`(display-mode: ${mode})`).matches) {
      return mode;
    }
  }
  
  // For iOS Safari
  if ('standalone' in window.navigator && (window.navigator as any).standalone === true) {
    return 'standalone';
  }
  
  // Default fallback
  return 'browser';
}

/**
 * Add a listener for display mode changes
 * 
 * @param callback Function to call when display mode changes
 * @returns {function} Function to remove the listener
 */
export function addDisplayModeChangeListener(
  callback: (displayMode: string) => void
): () => void {
  // Create a set of media query lists for the different display modes
  const mediaQueries = [
    window.matchMedia('(display-mode: standalone)'),
    window.matchMedia('(display-mode: fullscreen)'),
    window.matchMedia('(display-mode: minimal-ui)')
  ];
  
  // The listener function that calls the callback with the current display mode
  const listener = () => {
    callback(getDisplayMode());
  };
  
  // Add listeners to all media queries
  mediaQueries.forEach(mql => {
    if (mql.addEventListener) {
      mql.addEventListener('change', listener);
    } else if ('addListener' in mql) {
      // For older browsers
      (mql as any).addListener(listener);
    }
  });
  
  // Return a function to remove all listeners
  return () => {
    mediaQueries.forEach(mql => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', listener);
      } else if ('removeListener' in mql) {
        // For older browsers
        (mql as any).removeListener(listener);
      }
    });
  };
}
