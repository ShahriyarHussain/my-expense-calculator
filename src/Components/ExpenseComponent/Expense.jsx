import { useState } from "react";
import AddExpense from "./AddExpense";
import ModExpense from "./ModExpense";

function Expense(params) {
  const [chosenModule, setChosenModule] = useState(0);

  return (
    <div>
      <div className='m-2 font-bold text-lg'>Expense Page</div>

      <div>
        <button
          id='close'
          className='bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all p-2 ml-3 mt-3'
          onClick={() => setChosenModule(0)}>
          Close All Expense
        </button>
        <button
          id='addEx'
          className='bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all p-2 ml-3 mt-3'
          onClick={() => setChosenModule(1)}>
          Add Expense
        </button>
        <button
          id='modEx'
          className='bg-orange-400 text-black font-bold rounded-md hover:bg-orange-500 transition-all p-2 ml-3 mt-3'
          onClick={() => setChosenModule(2)}>
          Modify Expense
        </button>
      </div>

      <div>
        {chosenModule === 1 ? (
          <AddExpense />
        ) : chosenModule === 2 ? (
          <ModExpense />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Expense;
