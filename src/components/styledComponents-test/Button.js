import React from 'react'
import styled from 'styled-components'
export default function Button() {
   return (
      <div>
         <h3>I'm going to create a button with styled-components </h3>
         <StyledButton> click this button </StyledButton>
      </div>
   )
}

const StyledButton = styled.button`
   background-color: orange;
   color: white;
   padding: 20px 50px;
`
