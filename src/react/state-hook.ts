import { useState, useEffect } from 'react';

export function useHookWithState() {
  const [isBrowser, setIsBrowser] = useState(typeof window !== 'undefined');
  const [isServer, setIsServer] = useState(typeof window === 'undefined');

  useEffect(() => {
    setIsBrowser(true);
    setIsServer(false);
  }, []);

  return { isBrowser, isServer };
}
