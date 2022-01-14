import styled from 'styled-components'

 
function App() {
  return (
    <div className="App" style={{ width: '80%', margin: 'auto'}}>
      <h1>Phase 3: React JS - Styling - Extending styles </h1>
      <h4>Create the components (elements) at the top above the Page Component </h4>
      <ul>
        <li>import styled from 'styled-components</li> 
        <li>return.. button.. button</li>
        <li>Create componet styled-components</li>
        <li>Create extended button from already created button component</li>
        <li>Styled-components - lets you add media queries, pseudo-elements (hover,....)</li>
      </ul>
      <hr />
    
      const StyledBasicButton = styled.button` <br />
          <div style={{ paddingLeft: '30px', color: 'magenta', fontWeight: 'bold'}}>padding: 20px 60px;   <br />
          background-color: red;  <br />
          <br />
          &amp; 
          
          :hover 
          
          &#123;
          background-color: darkblue;
          color: white;
          &#125;
          <br />
          <br />
          @media (max-width: 500px)  &#123; <br />
            background-color: yellow; <br />
          &#125; <br />
          </div>
        `;
      
      <br />
      <StyledBasicButton> Basic button </StyledBasicButton>
      <StyledLargeButton> Large extended button </StyledLargeButton>

    </div>
  );
}
    const StyledBasicButton = styled.button`
        padding: 20px 60px;
        background-color: red;

        &:hover {
          background-color: darkblue;
          color: white;
        }

        @media (max-width: 500px) {
          background-color: yellow;
        }
      `;
      const StyledLargeButton = styled(StyledBasicButton)`
        padding: 40px 80px; 
        background-color: #355322;
      `;
export default App;
