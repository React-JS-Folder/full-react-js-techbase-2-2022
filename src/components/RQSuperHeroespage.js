import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = async () => {
   const res = await axios.get('https://reqres.in/api/users?page=2');     // this is success
   console.log(res);
   return res;
}

const executeFunctionOnSuccess = (error) => {
   alert("useQuery was used to fetch data, and it has successfully done its job");
}

const onError = (error) => {
   console.log("This is the error flag as a call back using useQuery " + error.message)
}

export default function RQSuperHeroesPage() {
   const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
      'super heroes',
      fetchSuperHeroes,
      {
         enabled: false,
         onSuccess: executeFunctionOnSuccess,
         onError,
      }
   )

   return (
      <>
         <div>RQ Super Heroes Page</div>
         <p>Fetch data from url - on click</p>
         <button onClick={refetch}>Fetch data</button>
         {data && data.data.data.map((hero) => {
            return (
               <p style={!error && { backgroundColor: '#000', color: '#ff0000'} }key={hero.id}>{hero.first_name} email: {hero.email}</p>
            )
         })}
         
      </>

   )
}