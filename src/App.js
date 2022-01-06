import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Planets from './Components/Planets'
import People from './Components/People'
import { QueryClientProvider, QueryClient } from 'react-query'


const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");

  return (
    
    <QueryClientProvider client={queryClient} >
      
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {/* {page === 'planets' ? <Planets /> : <People />} */}
          {page === 'planets' ? <Planets /> : "Nothing to see here"}
        </div>
      </div>

    </QueryClientProvider>
    
  );
}

export default App;
