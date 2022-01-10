import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = async () => {
   // return axios.get('https://reqres.in/api/users?page=2');
   const res = await axios.get('https://reqres.in/api/users?page=2');
   console.log(res);
   return res;
}



export default function RQSuperHeroesPage() {
   const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
      'super heroes',
      fetchSuperHeroes,
      {
         enabled: false,
      }
   )



   return (
      <>
      <div>RQ Super Heroes Page</div>
      <p>Fetch data from url - on click</p>
      <button onClick={refetch}>Fetch data</button>
      {data && data.data.data.map((hero) => {
         return (
            <p key={hero.id}>{hero.first_name} email: {hero.email}</p>
         )
      })}
      </>

   )
}