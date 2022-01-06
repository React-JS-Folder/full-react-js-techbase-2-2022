import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person';

const fetchPeople = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   return res.json()
   
}

export default function People() {
   const {isLoading, data, status} = useQuery('description', fetchPeople);

   return (
      <div>
         {isLoading && 'Loading...'}
         
         {data && data.map((eachData) => {
            return (
                  <Person key={eachData.id} eachData={eachData} />
               )
         })}
         
      </div>
   )
}
