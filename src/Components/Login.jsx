import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'
export default function Login() {

   const {username, setUsername, setShowProfile} = useContext(LoginContext);

   // console.log(username)
   // console.log(username);
   return (
      <>
         {/* <form> */}
            <input type="text" placeholder="Username..." onChange={(e) => {setUsername(e.target.value)}} />
            <input type="text" placeholder="Password..." />

            <button onClick={() => {username && setShowProfile(true)}}>LOGIN</button>
         {/* </form> */}
      </>
   )
}