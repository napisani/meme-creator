
import { fireEvent, render, screen } from '@testing-library/react';
import TextColorInput from './TextColorInput';
describe('TextColorInput', () => {
  it('the TextColorInput gets rendered', () => {
    const onColorChange = jest.fn();
    render(<TextColorInput   color="black"  onColorChange={onColorChange} />);
    const el = screen.getByText(/Text Color/i);
    expect(el).toBeInTheDocument();
  });
  it('changing the color value fires an onCheckedChange event', () => {
    const onColorChange = jest.fn();
    render(<TextColorInput   color="black"  onColorChange={onColorChange} />);
    fireEvent.change(screen.getByTestId("textColor"), { target: { value: "green" } });
    expect(onColorChange).toHaveBeenCalledTimes(1);
  });
});
