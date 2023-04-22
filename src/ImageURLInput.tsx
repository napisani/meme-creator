 import React from 'react'

 type Props = {
   imageUrl?: string,
   onImageUrlChange: (imageUrl: string) => void
 }

 export default function ImageURLInput(props: Props) {
   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
     props.onImageUrlChange(event.target.value)
   }
   return (
     <div>
       <label htmlFor="urlInput">Image URL:</label>
       <input data-testid="urlInput" 
         id="urlInput" 
         type="text" 
         value={props.imageUrl ?? ''} 
         onChange={handleChange}/>
     </div>
   )
 } 
