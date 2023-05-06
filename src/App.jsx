import { useState } from "react";
import Header from "./Header";
import Main from "./Mainn";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Main />
        {/* <div className="card">
         <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
  </div> */}
      </div>
    </>
  );
}

export default App;
