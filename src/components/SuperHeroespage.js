import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SuperHeroesPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(false);
   const [data, setData] = useState([]);


   useEffect(() => {
      axios.get('http://localhost:4000/superheroes')
         .then( (res) => {
            setData(res.data);
            console.log(res.data);
            setIsLoading(false)
         }).catch((error) => {
            setIsLoading(false)
            setError(true);
         })
   }, []);

   // {isLoading && <h3>Loading...</h3>}
   if (isLoading) {
      return <h2>Loading...</h2>
   }
   if(error) {
      return <h2>Sorry, server is not responding..</h2>
   }
   // {error && <h2>Sorry, server is not responding try later</h2>}

   return (
      <div>
         <h2>Traditional SuperHeroes Page</h2>
         {data && data.map((hero) => {
            return <h3 key={hero.name}>{hero.name}</h3>
         })}
      </div>
   )
}