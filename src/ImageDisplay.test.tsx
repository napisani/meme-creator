import {  fireEvent, render, screen } from '@testing-library/react';
import ImageDisplay from './ImageDisplay';
import { getDefaultImageManipulation, TextPosition } from './lib/interface';
const staticImage='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
describe('ImageDisplay', () => {
  it('the ImageDisplay gets rendered', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    render(<ImageDisplay imageUrl={staticImage}
      imageManipulation={imageManipulation}/>);
    const el = screen.getByTestId("memeImage");
    expect(el).toBeInTheDocument();
  });
  it('adding text to the imageManipulation causes text to be rendered in the ImageDisplay', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    imageManipulation.textOverlay= "example meme text";
    render(<ImageDisplay imageUrl={staticImage} 
      imageManipulation={imageManipulation}/>);
    const image = screen.getByTestId("memeImage"); 
    fireEvent.load(image);
    const el = screen.getByText(/example meme text/i);
    expect(el).toBeInTheDocument();
  })
  it('mirroring the image changes the transform styling', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    imageManipulation.mirrorHorizontal = true;
    imageManipulation.mirrorVertical = true;
    render(<ImageDisplay imageUrl={staticImage} 
      imageManipulation={imageManipulation}/>);
    const image = screen.getByTestId("memeImage"); 
    fireEvent.load(image);
    const imageWrapper = screen.getByTestId("memeImage"); 
    expect(imageWrapper).toHaveStyle('transform: rotate(0deg) scaleX(-1) scaleY(-1)');
  })
  it('rotating the image changes the transform style', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    imageManipulation.rotate = 90;
    render(<ImageDisplay imageUrl={staticImage} 
      imageManipulation={imageManipulation}/>);
    const image = screen.getByTestId("memeImage"); 
    fireEvent.load(image);
    const imageWrapper = screen.getByTestId("memeImage"); 
    expect(imageWrapper).toHaveStyle('transform: rotate(90deg)');
  })
  it('adjusting the text position changes the absolute top positioning style', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    imageManipulation.textOverlay = "example meme text";
    imageManipulation.textPosition = TextPosition.TOP;
    render(<ImageDisplay imageUrl={staticImage} 
      imageManipulation={imageManipulation}/>);
    const image = screen.getByTestId("memeImage"); 
    fireEvent.load(image);
    const imageWrapper = screen.getByTestId("memeTextOverlay"); 
    expect(imageWrapper).toHaveStyle('top: 10%');
  })
  it('adjusting the text color changes the color style', () => {
    const imageManipulation = getDefaultImageManipulation(); 
    imageManipulation.textOverlay = "example meme text";
    imageManipulation.textOverlayColor = "darkred";
    render(<ImageDisplay imageUrl={staticImage} 
      imageManipulation={imageManipulation}/>);
    const image = screen.getByTestId("memeImage"); 
    fireEvent.load(image);
    const imageWrapper = screen.getByTestId("memeTextOverlay"); 
    expect(imageWrapper).toHaveStyle('color: darkred');
  })

});
