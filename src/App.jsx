import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("Yes");
  const [condition, setCondition] = useState(true);

  const btnClick = () => {
    if (condition) {
      setMsg("No");
    } else {
      setMsg("Yes");
    }
    setCondition(!condition);
  };

  return (
    <div>
      <button
        className='bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition-all p-2 ml-3 mt-3'
        onClick={btnClick}>
        {msg}
      </button>
      {/* <p>{demo}</p> */}
    </div>
  );
}

export default App;
