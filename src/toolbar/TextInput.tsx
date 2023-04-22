import React from 'react'

type Props = {
  text: string,
  onTextChange: (text: string) => void
}

export default function TextInput({text, onTextChange}: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onTextChange(event.target.value)
  }
  return (
    <div className="input-container">
      <label htmlFor="text">Text:</label>
      <input id="text"
        data-testid="text"
        type="text" 
        value={text} 
        onChange={handleChange}/>
    </div>
  )
}
