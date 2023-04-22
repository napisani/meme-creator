import { fireEvent, render, screen } from '@testing-library/react';
import Slider from './Slider';
describe('Slider', () => {
  it('the slider gets rendered', () => {
    const onValueChange = jest.fn();
    render(<Slider min={1} max={10} id="testSlider" value={5} onValueChange={onValueChange} label="test slider"/>);
    const linkElement = screen.getByText(/test slider/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('changing the slider value fires the onValueChange event', () => {
    const onValueChange = jest.fn();
    render(<Slider min={1} max={10} id="testSlider" value={5} onValueChange={onValueChange} label="test slider"/>);
    fireEvent.change(screen.getByTestId("testSlider"), { target: { value: 9 } });
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });
});
