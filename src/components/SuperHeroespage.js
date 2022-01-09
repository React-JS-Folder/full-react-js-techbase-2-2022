import axios from 'axios'
import { useQuery } from 'react-query'

const fetchHeroesusingReactQuery = async () => {
   return axios.get('https://jsonplaceholder.typicode.com/albums');
}

export default function SuperHeroesPage() {

   const {isLoading, isFetching, isError, error, data} = useQuery("super heros", fetchHeroesusingReactQuery,
   {
      refetchOnMount: true,
      refetchOnWindowFocus: false,   //to stop refetching when you come back to this page. 
   });

   if (isLoading) {
      return <h2>Loading...</h2>
   }
   if (isError) {
      return <h3>There was an error: {error.message}</h3>
   }
   if (isFetching) {
      console.log("This is fetching again " + isFetching);
      return <h1>Query is repeated or data is being updated</h1>
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

