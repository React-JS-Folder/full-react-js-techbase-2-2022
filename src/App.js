import { useQuery } from 'react-query'

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users?');
  return res.json();
}


function App() {
  const {data, isLoading, isFetching, error} = useQuery("fetch Users", fetchUsers);
  // destructuring the json object ---useQuery has a data property and the object has a data property  = data.data.map()

  // if(isLoading) return 'Loading...';

  return (
    <div className="App">
      <h1>React Query 3</h1>
      <p>React Query is awesome!</p>

      {data && data.data.map((user) => {
          return <p key={user.id} >{user.id} : {user.email} </p>
      })}

    </div>
  );
}

export default App;
