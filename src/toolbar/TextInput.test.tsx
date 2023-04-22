
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';
describe('TextInput', () => {
  it('the TextInput gets rendered', () => {
    const onChange = jest.fn();
    render(<TextInput   text="MEME TEXT" onTextChange={onChange} />);
    const linkElement = screen.getByText(/Text:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('changing the text value fires an onTextChange event', () => {
    const onChange = jest.fn();
    render(<TextInput  text="MEME TEXT"  onTextChange={onChange} />);
    fireEvent.change(screen.getByTestId("text"), { target: { value: "NEW MEME TEXT" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
