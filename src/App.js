// import "./App.css"
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useState } from 'react'
import { LoginContext } from './Contexts/LoginContext'


function App() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {username && showProfile ? <Profile /> : <Login /> }
      </LoginContext.Provider>
    </div>
  );
}

export default App;
