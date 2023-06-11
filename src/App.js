import ExpenseItem from "./components/ExpensesContent/ExpenseItem";
import Expenses from "./components/ExpensesContent/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import React, { useState } from "react";
import Budget from "./components/UserBudget/Budget";
/**GLOBAL VARIABLE**/
const dummy_items = [];

function App() {

  //this function is passed in as a parameter into NewExpenses as 'props'

  const [expenses, addNewExpense] = useState(dummy_items); //ALways want to add the updated version of dummy_items in expenses that is passes in Expenses

  
  function onAddExpenseHandler(newExpenseData) {
    addNewExpense((PrevExpenses) => {
      console.log("From APP.js", [newExpenseData, ...PrevExpenses]);
      return [newExpenseData, ...PrevExpenses];
    });
  }

  const [curr, setCurr] = useState(0);
  function setAmt(currAmt) {
    setCurr(currAmt);
  }

  const [dateAdd, setDateAdd] = useState("2023");
  function setDate(newDate) {
    setDateAdd(newDate);
  }

  return (
    <div>
      {/* <div>
        <button onClick={() => setChange((props) => props + 1)}>+</button>
        <h2>{change}</h2>
        <button>-</button>
      </div> */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#3a7724",
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          paddingTop: "10px",
        }}
      >
        Expense Tracker
      </h1>

      <NewExpenses
        onAddExpense={onAddExpenseHandler}
        currFunc={setAmt}
        dateFunc={setDate}
      />

      <Expenses expenseItems={expenses} />
      <Budget expenseItems={curr} ></Budget>
    </div>
  );
}

export default App;
