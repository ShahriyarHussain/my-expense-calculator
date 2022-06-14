import { useState } from "react";
import "./App.css";
import Expense from "./Components/ExpenseComponent/Expense";

function App() {
  const [condition, setCondition] = useState(true);

  function flipCondition() {
    setCondition(!condition);
  }

  return (
    <div>
      <button
        className='bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition-all p-2 ml-3 mt-3'
        onClick={flipCondition}>
        {condition ? "Yes" : "No"}
      </button>
      <Expense />
      {/* <p>{demo}</p> */}
    </div>
  );
}

export default App;
