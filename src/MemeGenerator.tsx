import React, {  useState } from 'react'
import ImageDisplay from './ImageDisplay';
import ImageURLInput from './ImageURLInput';
import { getDefaultImageManipulation } from './lib/interface';
import Toolbar from './toolbar/Toolbar';
import logo from './logo.png';
import styles from './MemeGenerator.module.css';
export default function MemeGenerator() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageManipulation, setImageManipulation] = useState(getDefaultImageManipulation());
  return (
    <div className={styles['app-container']}>
      <div className={styles['title-container']} >
      <h1>
          <img src={logo} width="50px" className="app-logo" alt="logo" />
          Meme Generator
        </h1>
      </div>
      <div className={styles['form-container']}>
        <ImageURLInput imageUrl={imageUrl} onImageUrlChange={setImageUrl} />
        <Toolbar  imageManipulation={imageManipulation} onManipulationChange={setImageManipulation} />
      </div>
      <ImageDisplay imageUrl={imageUrl} imageManipulation={imageManipulation} />
    </div>
  )
}
