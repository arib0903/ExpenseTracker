import ExpenseItem from "./components/ExpensesContent/ExpenseItem";
import Expenses from "./components/ExpensesContent/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import React, { useState } from "react";
import Budget from "./components/UserBudget/Budget";
/**GLOBAL VARIABLE**/
const dummy_items = [];

function App() {
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpenseItem
  //       date={obj[0].expenseDate}
  //       title={obj[0].expenseTitle}
  //       amt={obj[0].expenseAmount}
  //     />
  //     <ExpenseItem
  //       date={obj[1].expenseDate}
  //       title={obj[1].expenseTitle}
  //       amt={obj[1].expenseAmount}
  //     />
  //     <ExpenseItem
  //       date={obj[1].expenseDate}
  //       title={obj[1].expenseTitle}
  //       amt={obj[1].expenseAmount}
  //     />
  //   </div>
  // );

  //this function is passed in as a parameter into NewExpenses as 'props'

  const [expenses, addNewExpense] = useState(dummy_items); //ALways want to add the updated version of dummy_items in expenses that is passes in Expenses

  function onAddExpenseHandler(newExpenseData) {
    addNewExpense((PrevExpenses) => {
      console.log("From APP.js", [newExpenseData, ...PrevExpenses]);
      return [newExpenseData, ...PrevExpenses];
    });

    // return expenses;
  }

  // const [change, setChange] = useState(0);

  // function add() {
  //   setChange((prop) => prop + 1);
  // }
  const [curr, setCurr] = useState(0);
  // const [ex, SetEx] = useState(curr);
  function setAmt(currAmt) {
    setCurr(currAmt);
  }

  const [budg, setBudg] = useState(0);
  function setNewBudg(currAmt) {
    setBudg(currAmt);
  }

  return (
    <div>
      {/* <div>
        <button onClick={() => setChange((props) => props + 1)}>+</button>
        <h2>{change}</h2>
        <button>-</button>
      </div> */}
      <NewExpenses
        onAddExpense={onAddExpenseHandler}
        currFunc={setAmt}
        budgetFunc={setNewBudg}
      />
      <Expenses expenseItems={expenses} />{" "}
      <Budget expenseItems={curr} enteredBudg={budg}></Budget>
    </div>
  );
}

export default App;
