import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  it('renders app component - title exists', () => {
    render(<App />);
    const el = screen.getByText(/meme generator/i);
    expect(el).toBeInTheDocument();
  })
});
