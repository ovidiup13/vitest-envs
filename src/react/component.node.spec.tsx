import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';

import ExampleComponent from './component';

describe('SSR Component', () => {
  it('renders the browser message', () => {
    const result = renderToString(<ExampleComponent />);

    // We are expecting the useEffect NOT to execute and assert on the final state of the component.
    expect(result).toMatchSnapshot();
  });
});
