import React from 'react';
import { render, screen } from '@testing-library/react';
import MemeGenerator from './MemeGenerator';
describe('MemeGenerator', () => {
  it('renders MemeGenerator component', () => {
    render(<MemeGenerator/>);
    let el = screen.getByText(/meme generator/i);
    expect(el).toBeInTheDocument();
    el = screen.getByText(/URL:/i);
    expect(el).toBeInTheDocument();
    el = screen.getByText(/Text Position:/i);
    expect(el).toBeInTheDocument();
  })
});
