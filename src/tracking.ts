// Meta Pixel custom events tracker for DolorCiao
// Ensures each custom event is triggered at most once per user session.

const inMemoryTracked = new Set<string>();

export function trackCustomOnce(eventName: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  const sessionKey = `dc_pixel_${eventName}`;

  // Check if already fired in this session (via sessionStorage or in-memory)
  if (inMemoryTracked.has(eventName)) {
    return;
  }

  try {
    if (sessionStorage.getItem(sessionKey)) {
      inMemoryTracked.add(eventName);
      return;
    }
  } catch {
    // Ignore sessionStorage security/storage exceptions
  }

  // Mark as tracked immediately to prevent race conditions
  inMemoryTracked.add(eventName);
  try {
    sessionStorage.setItem(sessionKey, '1');
  } catch {
    // Ignore
  }

  // Fire fbq trackCustom
  if (typeof (window as any).fbq === 'function') {
    try {
      if (params && Object.keys(params).length > 0) {
        (window as any).fbq('trackCustom', eventName, params);
      } else {
        (window as any).fbq('trackCustom', eventName);
      }
      console.log(`%c[Meta Pixel trackCustom]%c ${eventName}`, 'color: #0E4A72; font-weight: bold;', 'color: #16A34A; font-weight: bold;', params || '');
    } catch (err) {
      console.error(`[Meta Pixel error on ${eventName}]:`, err);
    }
  } else {
    console.warn(`[Meta Pixel fbq unavailable] Could not track: ${eventName}`);
  }

  // Expose tracked list for easy developer verification in console
  try {
    (window as any).__dolorCiaoTrackedEvents = Array.from(inMemoryTracked);
  } catch {
    // Ignore
  }
}

// Utility to reset session tracking for debugging and testing
export function resetTrackingSession(): void {
  inMemoryTracked.clear();
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith('dc_pixel_')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => sessionStorage.removeItem(k));
    if (typeof window !== 'undefined') {
      (window as any).__dolorCiaoTrackedEvents = [];
    }
    console.log('[Meta Pixel] Tracking session reset');
  } catch {
    // Ignore
  }
}

if (typeof window !== 'undefined') {
  (window as any).__resetDolorCiaoTracking = resetTrackingSession;
}
