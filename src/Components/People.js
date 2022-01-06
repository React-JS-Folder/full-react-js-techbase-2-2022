import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person';


const fetchPeople = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/albums');
   return res.json();
}

// const {id, title} = useQuery("data from API", FetchPeople);

export default function People() {
   const {data, status} = useQuery("data from API", fetchPeople);
   return (
      <div className="card">
         {data && data.map((person) => {
            return(
               <Person person={person} />

            )
         })}
      </div>
   )
}
