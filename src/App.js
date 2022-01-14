// import Button from "./components/styledComponents-test/Button";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Phase 3: React JS - Styling -- Styled Components</h1>
      <SuperButton1>this button text is blue</SuperButton1>
      <SuperButton1 primary>this button text is red</SuperButton1>
        
      <h3 style={{ width: '80%', margin: 'auto', padding: '40px'}}><b>const FooterButton = styled.button`</b>background-color: $&#123;(props) =&gt; (props.primary ? "red" : "blue") &#125;<br /></h3>


      <pre style={{width: "80%", margin: 'auto', padding: "30px", backgroundColor: "#333", color: '#ccc', lineHeight: '1.6'}}>
        To give style using Styled-Components Condition based on Props in React Js. <br />
        1. import styled from 'styled-components' <br />
        
        2. create an html5 element using the word "styled" <br /> 
        
        3. you need to take the variable you created to import 'styled-components' and add use it to create components <br /><br />
      
       <b>const FooterButton = styled.button`</b> <br />
            background-color: $&#123;(props) =&gt; (props.primary ? "red" : "blue") &#125;<br />
            color: $&#123;(props) =&gt; (props.primary ? "white" : "yellow") &#125;<br />
            padding: $&#123;(props) =&gt; (props.primary ? "20px 60px" : "40px") &#125;      <br />      
        <b>`;</b>
        
      </pre>

    </div>
  );
}
      
const SuperButton1 = styled.button`
   background-color: ${(props) => (props.primary ? "red" : "blue")};
   color: ${(props) => (props.primary ? "white" : "yellow")};
   padding: ${(props) => (props.primary ? "20px 60px" : "40px")}
`;



export default App;
