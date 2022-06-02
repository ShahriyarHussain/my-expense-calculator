import { useState } from "react";
import "./App.css";

function App() {
  const [condition, setCondition] = useState(true);

  function flipCondition() {
    setCondition(!condition);
  }

  return (
    <div>
      <button
        className="bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition-all p-2 ml-3 mt-3"
        onClick={flipCondition}
      >
        {condition ? "Yes" : "No"}
      </button>
      {/* <p>{demo}</p> */}
    </div>
  );
}

export default App;
