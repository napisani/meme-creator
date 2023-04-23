import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Slider from './Slider';
describe('Slider', () => {
  it('the slider gets rendered', () => {
    const onValueChange = jest.fn();
    render(
      <Slider
        min={1}
        max={10}
        id="testSlider"
        value={5}
        onValueChange={onValueChange}
        label="test slider"
      />
    );
    const el = screen.getByText(/test slider/i);
    expect(el).toBeInTheDocument();
  });
  it('changing the slider value fires the onValueChange event', () => {
    const onValueChange = jest.fn();
    render(
      <Slider
        min={1}
        max={10}
        id="testSlider"
        value={5}
        onValueChange={onValueChange}
        label="test slider"
      />
    );
    fireEvent.change(screen.getByTestId('testSlider'), {
      target: { value: 9 },
    });
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });
});
