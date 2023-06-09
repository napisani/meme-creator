import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckBox from './CheckBox';
describe('CheckBox', () => {
  it('the checkbox gets rendered', () => {
    const onCheckedChange = jest.fn();
    render(
      <CheckBox
        id="testCheckBox"
        checked={true}
        onCheckedChange={onCheckedChange}
        label="test checkBox"
      />
    );
    const el = screen.getByText(/test checkBox/i);
    expect(el).toBeInTheDocument();
  });
  it('clicking the checkbox fires an onCheckedChange event', () => {
    const onCheckedChange = jest.fn();
    render(
      <CheckBox
        id="testCheckBox"
        checked={true}
        onCheckedChange={onCheckedChange}
        label="test checkBox"
      />
    );
    userEvent.click(screen.getByTestId('testCheckBox'));
    expect(onCheckedChange).toHaveBeenCalledTimes(1);
  });
});
