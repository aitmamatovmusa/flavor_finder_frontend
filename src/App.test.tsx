import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Test', () => {
  it('render App', () => {
    render(<App />);

    expect(screen.getByText(/Hello react/i)).toBeInTheDocument();
  });
});
