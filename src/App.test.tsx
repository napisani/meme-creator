import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// test('renders title', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/meme generator/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('App', () => {
  it('renders app component - title exists', () => {
    render(<App />);
    const linkElement = screen.getByText(/meme generator/i);
    expect(linkElement).toBeInTheDocument();
  })
  it('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/meme generator/i);
    expect(linkElement).toBeInTheDocument();
  })
});
