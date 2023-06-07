import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpenses.css";

//this props is the function 'onAddExpenseHandler'(onAddExpense) from app.js
function NewExpenses(props) {
  function saveExpenseDataHandler(
    enteredExpenseData,
    currentAmt,
    yearSelected
  ) {
    //Expense data is a new object that we create from 'enteredExpenseData'
    console.log("From NewExpenses", typeof enteredExpenseData);
    props.onAddExpense(enteredExpenseData); // this passes expenseData into the 'onAddExpenseHandler' function as a means print out the added data
    props.currFunc(currentAmt);
    props.dateFunc(yearSelected);
  }
  function carryOutBudgetFunc(budget) {
    console.log(budget);
    props.budgetFunc(budget);
  }

  /*********************************************************************************************************************************************************** */
  let [isOn, checkOn] = useState(true);

  function addingItemOn() {
    checkOn(false);
  }

  function addingItemOff() {
    checkOn(true);
  }
  /*********************************************************************************************************************************************************** */

  return (
    <div className="new-expense">
      {isOn && <button onClick={addingItemOn}>Add Expense</button>}
      {!isOn && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          carryOutBudget={carryOutBudgetFunc}
          cancel={addingItemOff}
        />
      )}
    </div>
  );
}

export default NewExpenses;
