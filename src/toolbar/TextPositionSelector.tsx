import React from 'react'
import { TextPosition } from '../lib/interface'
type Props = {
  value:TextPosition
  onValueChange: (value: TextPosition) => void
}

export default function TextPositionSelector({value, onValueChange}: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onValueChange(event.target.value as TextPosition)
  }
  return (
    <div className="input-container">
      <label>Text Position:</label>
      <div>
        <input 
          type="radio" 
          id="textPositionTop" 
          data-testid="textPositionTop" 
          name="textPosition" 
          checked={value === TextPosition.TOP}
          onChange={handleChange}
          value={TextPosition.TOP}/>
        <label htmlFor="textPositionTop">Top</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="textPositionBottom" 
          data-testid="textPositionBottom" 
          name="textPosition" 
          checked={value === TextPosition.BOTTOM}
          onChange={handleChange}
          value={TextPosition.BOTTOM}/>
        <label htmlFor="textPositionBottom">Bottom</label>
      </div>
    </div>
  )
}
