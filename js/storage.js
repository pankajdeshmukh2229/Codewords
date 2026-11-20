const STORAGE_KEY = 'gow.state.v1';

export function readGame() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return isValidGame(state) ? state : null;
  } catch {
    return null;
  }
}

export function writeGame(state) {
  try {
    state.stamp = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function isValidGame(state) {
  return Boolean(state && Array.isArray(state.words) && state.words.length === 25 &&
    Array.isArray(state.owners) && state.owners.length === 25 &&
    Array.isArray(state.revealed) && state.revealed.length === 25);
}

export function subscribeToGame(onChange) {
  const onStorage = event => {
    if (event.key === STORAGE_KEY) {
      const state = readGame();
      if (state) onChange(state);
    }
  };
  window.addEventListener('storage', onStorage);
  return () => window.removeEventListener('storage', onStorage);
}

export function watchGame(onChange, intervalMs = 500) {
  let stamp = readGame()?.stamp ?? 0;
  return window.setInterval(() => {
    const state = readGame();
    if (state && state.stamp !== stamp) {
      stamp = state.stamp;
      onChange(state);
    }
  }, intervalMs);
}
