import React from 'react'

export default function Person(props) {
   const {person} = props;

   return (
      <>
         <div key={person.id}>
            <h3>{person.title}</h3>
            <h4>{person.id}</h4>
            <hr />
         </div>
       
      </>
   )
}
