import React from 'react'

export default function Image(props) {
   const {eachImage} = props;

   console.log(eachImage.thumbnailUrl);

   return (

         <img src={eachImage.thumbnailUrl} />
   )
      
}
