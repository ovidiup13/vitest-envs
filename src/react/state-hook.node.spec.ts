import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks/server';
import { useHookWithState } from './state-hook';

describe('useHookWithState', () => {
  it('returns isServer true', () => {
    const { result } = renderHook(() => useHookWithState());
    expect(result.current).toEqual({ isBrowser: false, isServer: true });
  });
});
