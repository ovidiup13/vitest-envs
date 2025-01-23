import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useHookWithState } from './state-hook';

describe('useHookWithState', () => {
  it('returns isBrowser true', () => {
    const { result } = renderHook(() => useHookWithState());
    expect(result.current).toEqual({ isBrowser: true, isServer: false });
  });
});
