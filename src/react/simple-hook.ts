export function useExampleHook() {
  if (typeof window !== 'undefined') {
    return {
      isBrowser: true,
      isServer: false,
    };
  }

  return {
    isServer: true,
    isBrowser: false,
  };
}
