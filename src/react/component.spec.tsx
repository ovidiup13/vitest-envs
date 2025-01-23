import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ExampleComponent from './component';

describe('Component', () => {
  it('renders the browser message', () => {
    render(<ExampleComponent />);

    // We are expecting the useEffect to execute and assert on the final state of the component.
    expect(screen.getByText('Hello, Browser!')).toBeInTheDocument();
  });
});
