import People from './components/People'
import Images from './components/Images'
import {QueryClientProvider, QueryClient} from 'react-query'
import './App.css'
import { useState } from 'react'
const queryClient = new QueryClient();


function App() {
  const [peopleList, setPeopleList] = useState(false);
  const [imagesList, setImagesList] = useState(false);
  
  return (

    <div className="App">
            <h1>Phase 2: React JS - Context API, React Query </h1>
            <QueryClientProvider client={queryClient} >
                <button onClick={() => {
                  setPeopleList(true);
                  setImagesList(false);
                }}>
                  People
                </button>
                <button onClick={() => {
                  setPeopleList(false);
                  setImagesList(true);
                }} >
                  Images
                </button>
          {peopleList && <People />}
          {imagesList && <Images />}

      </QueryClientProvider>
    </div>
  );
}

export default App;
