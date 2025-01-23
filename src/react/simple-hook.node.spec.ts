import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks/server';
import { useExampleHook } from './simple-hook';

describe('useHook browser', () => {
  it('returns isBrowser false', () => {
    const { result } = renderHook(() => useExampleHook());
    expect(result.current).toEqual({ isBrowser: false, isServer: true });
  });
});
