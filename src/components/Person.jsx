import React from 'react'

export default function Person(props) {
   const {eachData} = props;
   return (
      <div className="card">
         <h3>{eachData.id}</h3>
         <p>{eachData.name}</p>
         <p>{eachData.username}</p>
         <p>{eachData.email}</p>
      </div>
   )
}
