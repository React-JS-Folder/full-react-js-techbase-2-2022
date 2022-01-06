import React from 'react'
import { useQuery } from 'react-query'
import Image from './Image';


const fetchImages = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/photos');
   // console.log(res.json());
   return res.json();
}


export default function Images() {
   const {isLoading, data, status} = useQuery("Images", fetchImages);

   return (
      <div className="gallery">
         {isLoading && 'Loading...'}
         {data && data.map((eachImage) => {
            return (
               <>
                  <Image key={eachImage.id} eachImage={eachImage} />
               </>
            )               

         })}
         
      </div>
   )
}
