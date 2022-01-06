import React from 'react'

export default function Person(props) {
   const {person} = props;

   return (
      <div>
         {person.map((eachperson) => {
            <div key={eachperson.id}>
               <h3>{eachperson.title}</h3>
               <h4>{eachperson.id}</h4>
            <hr />
            </div>
         })}
      </div>
   )
}
