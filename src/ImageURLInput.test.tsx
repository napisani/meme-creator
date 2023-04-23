import { fireEvent, render, screen } from '@testing-library/react';
import ImageURLInput from './ImageURLInput';
describe('ImageURLInput', () => {
  it('the ImageURLInput gets rendered', () => {
    const onChange = jest.fn();
    render(<ImageURLInput  imageUrl="" onImageUrlChange={onChange}/>);
    const el = screen.getByText(/URL:/i);
    expect(el).toBeInTheDocument();
  });
  it('changing the text value fires an onTextChange event', () => {
    const onChange = jest.fn();
    render(<ImageURLInput  imageUrl="" onImageUrlChange={onChange}/>);
    fireEvent.change(screen.getByTestId("urlInput"), { target: { value: "http://google.com" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
