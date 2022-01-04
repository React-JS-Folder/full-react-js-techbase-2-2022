import { useState } from "react";
import Component1 from "./Components/Component1";
import {ContextComponent3}  from "./Context_Exercise/ContextApi2022";

function App() {
  const [name, setName] = useState("Marco");
  const [car, setCar] = useState("BMW 8");

  return (
    <div className="App">
      {/* <ContextComponent3.Provider value={name, setName, car, setCar}> */}
      <ContextComponent3.Provider value={[name, car]}>
          <h1>Phase 2: React JS - Context API, React Query </h1>
          <Component1 />
      </ContextComponent3.Provider>
    </div>
  );
}

export default App;
