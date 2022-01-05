import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'
export default function Profile() {
   const {username} = useContext(LoginContext);
   
   return (
      <div>
         <h2>PROFILE</h2>
         <h5>Welcome {username}</h5>
      </div>
   )
}
