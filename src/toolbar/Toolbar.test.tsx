import {  fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getDefaultImageManipulation} from '../lib/interface';

import Toolbar from './Toolbar';
describe('Toolbar', () => {
  it('the Toolbar gets rendered', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    const posLabel= screen.getByText(/Text Position:/i);
    expect(posLabel).toBeInTheDocument();
  });
  it('clicking textPosition top radio button fires an onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    userEvent.click(screen.getByTestId('textPositionTop'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('changing the text value fires an onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    fireEvent.change(screen.getByTestId("text"), { target: { value: "NEW MEME TEXT" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('changing the color value fires an onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    fireEvent.change(screen.getByTestId("textColor"), { target: { value: "green" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('changing the scale slider value fires the onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    fireEvent.change(screen.getByTestId("scale"), { target: { value: 101 } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('changing the rotate slider value fires the onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    fireEvent.change(screen.getByTestId("rotate"), { target: { value: 90 } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('clicking the mirror horizontally checkbox fires the onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    userEvent.click(screen.getByTestId('mirrorHorizontal'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('clicking the mirror vertically checkbox fires the onManipulationChange event', () => {
    const onChange = jest.fn();
    const imageManipulation = getDefaultImageManipulation();
    render(<Toolbar imageManipulation={imageManipulation} onManipulationChange={onChange} />);
    userEvent.click(screen.getByTestId('mirrorVertical'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
