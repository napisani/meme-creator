
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextColorInput from './TextColorInput';
describe('TextColorInput', () => {
  it('the TextColorInput gets rendered', () => {
    const onColorChange = jest.fn();
    render(<TextColorInput   color="black"  onColorChange={onColorChange} />);
    const linkElement = screen.getByText(/Text Color/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('changing the color value fires an onCheckedChange event', () => {
    const onColorChange = jest.fn();
    render(<TextColorInput   color="black"  onColorChange={onColorChange} />);
    fireEvent.change(screen.getByTestId("textColor"), { target: { value: "green" } });
    expect(onColorChange).toHaveBeenCalledTimes(1);
  });
});
