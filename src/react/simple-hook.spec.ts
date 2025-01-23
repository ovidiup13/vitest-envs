import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useExampleHook } from './simple-hook';

describe('useHook browser', () => {
  it('returns isBrowser true', () => {
    const { result } = renderHook(() => useExampleHook());
    expect(result.current).toEqual({ isBrowser: true, isServer: false });
  });
});
