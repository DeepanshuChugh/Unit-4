import React from 'react'

const Functionality = ({heading,l1,l2,l3,l4}) =>{
    return (
      <div>
      <h1> {heading}</h1>
      <ul>
        <li>{l1}</li>
        <li>{l2}</li>
        <li>{l3}</li>
        <li>{l4}</li>
      </ul>
      </div>
    )
  
  } 
  export default Functionality;