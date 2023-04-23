import React from 'react';

type Props = { color: string; onColorChange: (color: string) => void };

export default function TextColorInput({ color, onColorChange }: Props) {
  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    onColorChange(event.target.value);
  }
  return (
    <div className="input-container">
      <label htmlFor="textColor">Text Color:</label>
      <input
        type="color"
        id="textColor"
        data-testid="textColor"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
