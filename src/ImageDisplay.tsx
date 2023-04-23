import {  CSSProperties, SyntheticEvent, useState } from 'react'
import { ImageManipulation, TextPosition } from './lib/interface'
import styles from './ImageDisplay.module.css'
type Props = {
  imageUrl?: string,
  imageManipulation: ImageManipulation,
}
// calculate the css 'width' property based on the scale and intrinsic width of the image
function getWidth(scale: number, intrinsicWidth: number) {
  return `${intrinsicWidth * (scale / 100.0)}px`
}
function getTextOverlayStyle(imageManipulation: ImageManipulation, loadedSuccessfully: boolean, intrinsicWidth: number) {
  if (!loadedSuccessfully) {
    return {}
  }
  const overlayStyles: CSSProperties = {
    color: imageManipulation.textOverlayColor,
  }
  if (imageManipulation.textPosition === TextPosition.TOP) {
    overlayStyles['top'] = '10%';
  } else  {
    overlayStyles['bottom'] = '10%';
  }
  return overlayStyles
}

function getImageWrapperStyle(
  imageManipulation: ImageManipulation, 
  loadedSuccessfully: boolean, 
  intrinsicWidth: number) {
  if (!loadedSuccessfully) {
    return {}
  }
  return {
    width: getWidth(imageManipulation.scale, intrinsicWidth), 
  }
}
function getImageStyle(
  imageManipulation: ImageManipulation, 
  loadedSuccessfully: boolean, 
  intrinsicWidth: number) {
  if (!loadedSuccessfully) {
    return {}
  }
  let transform = `rotate(${imageManipulation.rotate}deg)`;
  if (imageManipulation.mirrorHorizontal) {
    transform += ' scaleX(-1)';
  }
  if (imageManipulation.mirrorVertical) {
    transform += ' scaleY(-1)';
  }
  return {
    transform: transform,
    width: getWidth(imageManipulation.scale, intrinsicWidth), 
  }
}

export default function ImageDisplay({ imageUrl, imageManipulation}: Props) {
  const [loadedSuccessfully, setLoadedSuccessfully] = useState(false);
  const [intrinsicWidth, setIntrinsicWidth] = useState(100);
  if (!imageUrl) {
    return (
    <div className={styles.container}>
      <div 
        id="memeImageWrapper"
        data-testid="memeImageWrapper"
        className={ styles['image-wrapper'] }>Please enter an image URL</div>
    </div>
    );
  }
  function handleLoad(event: SyntheticEvent<HTMLImageElement, Event>) {
    setLoadedSuccessfully(true);
    // intristicWidth the width of the image before any scaling is applied
    setIntrinsicWidth((event.target as HTMLImageElement).naturalWidth);
  }
  return (
    <div className={styles.container}>
        <div 
        id="memeImageWrapper"
        data-testid="memeImageWrapper"
        className={ styles['image-wrapper']  } style={getImageWrapperStyle(imageManipulation, loadedSuccessfully, intrinsicWidth)}>
          <img 
            id="memeImage"
            data-testid="memeImage"
            style={getImageStyle(imageManipulation, loadedSuccessfully, intrinsicWidth)}
            src={imageUrl}
            alt="I'm sorry, we failed to load that asset. Are you sure it is the correct URL?" 
            onLoad={handleLoad}
            onError={() => setLoadedSuccessfully(false)}
        /> 
        {loadedSuccessfully && (
        <div 
          id="memeTextOverlay"
          data-testid="memeTextOverlay"
          className={styles['text-overlay']}
          style={getTextOverlayStyle(imageManipulation, loadedSuccessfully, intrinsicWidth)}>
          {imageManipulation.textOverlay}
        </div>
        )}
      </div>
    </div>
  )
}
