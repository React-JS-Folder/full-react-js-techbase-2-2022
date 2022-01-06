import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person';


const FetchPeople = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/albums');
   // return res.json();
   return res.json();
}

// const {id, title} = useQuery("data from API", FetchPeople);

export default function People() {
   const {data, status} = useQuery("data from API", FetchPeople);
   return (
      <div>
         {data.map((person) => {
            return(
               <Person person={person} />

            )
         })}
      </div>
   )
}
