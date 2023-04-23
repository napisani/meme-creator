// this interface represents all of the 
// manipluations / transformations that can be applied to a base meme image
export interface ImageManipulation {
  // scale is a percentage 
  scale: number;
  //  the number of degress to rotate the image (clockwise)
  rotate: number;
  // whether or not to mirror the image over the horizontal axis 
  mirrorHorizontal: boolean;
  // whether or not to mirror the image over the vertical axis
  mirrorVertical: boolean;
  // the text to overlay on the image
  textOverlay: string;
  // the color of the text 
  textOverlayColor: string;
  // the position of the text relative to the image 
  textPosition: TextPosition;
}
export enum TextPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export function getDefaultImageManipulation(): ImageManipulation {
  return {
    scale: 100,
    rotate: 0,
    mirrorVertical: false,
    mirrorHorizontal: false,
    textOverlay: '',
    textOverlayColor: 'black',
    textPosition: TextPosition.BOTTOM,
  };
}
