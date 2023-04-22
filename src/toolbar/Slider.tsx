import React from 'react'

type Props = {
  id: string,
  label: string,
  value: number,
  min: number,
  max: number,
  step?: number,
  onValueChange: (value: number) => void
}

export default function Slider({ id,
  value,
  min, max,
  onValueChange,
  label,
  step = 1,
}: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(event.target.value)
    onValueChange(val)
  }

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}: </label>
      <input type="range"
        data-testid={id}
        id={id}
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={handleChange} />
    </div>
  );
}
