export interface ImageManipulation {
  scale: number;
  rotate: number;
  mirrorHorizontal: boolean;
  mirrorVertical: boolean;
  textOverlay: string;
  textOverlayColor: string;
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
