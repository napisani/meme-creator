
import {  render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextPosition } from '../lib/interface';
import TextPositionSelector from './TextPositionSelector';
describe('TextPositionSelector', () => {
  it('the TextPositionSelector gets rendered', () => {
    const onChange = jest.fn();
    render(<TextPositionSelector value={TextPosition.TOP} onValueChange={onChange} />);
    const el = screen.getByText(/Text Position:/i);
    expect(el).toBeInTheDocument();
  });
  it('clicking textPosition bottom radio button fires an onValueChange event', () => {
    const onChange = jest.fn();
    render(<TextPositionSelector  value={TextPosition.TOP} onValueChange={onChange} />);
    userEvent.click(screen.getByTestId('textPositionBottom'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
