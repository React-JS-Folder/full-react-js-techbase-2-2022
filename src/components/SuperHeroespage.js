import axios from 'axios'
import { useQuery } from 'react-query'

const fetchHeroesusingReactQuery = async () => {
   return axios.get('https://jsonplaceholder.typicode.com/albums');
}

export default function SuperHeroesPage() {

   const {isLoading, error, data, status } = useQuery("testing React Query", fetchHeroesusingReactQuery);

   if (isLoading) {
      return <h2>Loading...</h2>
   }


   return (
      
      <>
         <h1>Hello World, this is the new stronger, smarter, better Marco</h1> 
         <h5>this is inside the return statement, but not inside the data.map</h5>

         {data?.data.map((eachElement) => {
            return (  
               <div key={eachElement.id}>
                  <p>{eachElement.id}. <b>{eachElement.title}</b></p>
               </div>
                  
               )
            })}
      </>

   ) 
}

