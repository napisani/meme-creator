import React from 'react'
import CheckBox from './CheckBox'
import { ImageManipulation, TextPosition } from '../lib/interface'
import Slider from './Slider'
import TextColorInput from './TextColorInput'
import TextInput from './TextInput'
import TextPositionSelector from './TextPositionSelector'

type Props = {
  imageManipulation: ImageManipulation,
  onManipulationChange: (imageManipulation: ImageManipulation) => void
}

export default function Toolbar({imageManipulation, onManipulationChange}: Props) {
  function handleScale(scale: number) {
    const newImageManipulation = {...imageManipulation, scale}
    onManipulationChange(newImageManipulation)
  }
  function handleRotate(rotate: number) {
    const newImageManipulation = {...imageManipulation, rotate}
    onManipulationChange(newImageManipulation)
  }
  function handleMirrorHorizontalChange(checked: boolean) {
    const newImageManipulation = {...imageManipulation, mirrorHorizontal: checked}
    onManipulationChange(newImageManipulation)
  }
  function handleMirrorVerticalChange(checked: boolean) {
    const newImageManipulation = {...imageManipulation, mirrorVertical: checked}
    onManipulationChange(newImageManipulation)
  }
  function handleTextChange(text: string) {
    const newImageManipulation = {...imageManipulation, textOverlay: text}
    onManipulationChange(newImageManipulation)
  }
  function handleTextPositionChange(textPosition: TextPosition) {
    const newImageManipulation = {...imageManipulation, textPosition}
    onManipulationChange(newImageManipulation)
  }
  function handleTextOverlayColorChange(color: string) {
    const newImageManipulation = {...imageManipulation, textOverlayColor: color}
    onManipulationChange(newImageManipulation)
  }
  return (
    <div>
      <Slider 
        id="scale"
        min={ 10 } 
        max={ 500 } 
        step={ 10 } 
        value={imageManipulation.scale} 
        onValueChange={handleScale} label="Scale" />
      <Slider 
        id="rotate" 
        min={ 0 } 
        max={ 360 } 
        value={imageManipulation.rotate} 
        onValueChange={handleRotate} 
        label="Rotate" />
      <CheckBox 
        id="mirrorHorizontal" 
        label="Mirror Horizontally" 
        checked={imageManipulation.mirrorHorizontal} 
        onCheckedChange={handleMirrorHorizontalChange} />
      <CheckBox id="mirrorVertical" 
        label="Mirror Vertically" 
        checked={imageManipulation.mirrorVertical} 
        onCheckedChange={handleMirrorVerticalChange} />
      <TextInput text={imageManipulation.textOverlay}  
        onTextChange={handleTextChange}/>
      <TextPositionSelector
        value={imageManipulation.textPosition} 
        onValueChange={handleTextPositionChange}/>
      <TextColorInput 
        color={imageManipulation.textOverlayColor} 
        onColorChange={handleTextOverlayColorChange} />
    </div>
  )
}
