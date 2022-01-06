// import React from 'react'

// export default function Planet({ planet }) {

//         planet.name
//         planet.population
//         planet.terrain
// -------------------------------------

import React from 'react'

export default function Planet(props) {
   const {planet} = props;
   return (
      <div className="card">
         <h3>{planet.name}</h3>
         <p>Population - {planet.population}</p>
         <p>Terrain - {planet.terrain}</p>
      </div>
  
   )
}
