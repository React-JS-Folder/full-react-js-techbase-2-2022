import React from 'react'
import {ContextComponent3}  from '../Context_Exercise/ContextApi2022'
import { useContext } from 'react'



export default function Component3() {
   const [name, car] = useContext(ContextComponent3);

   return (
      <div>
         <h3>Component 3</h3>
         <h1>My name is: {name}, and my car is: {car} </h1>
      </div>
   )
}
