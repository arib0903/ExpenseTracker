import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  /*********************************************************************************************************************************************************** */
  /*    To store the state and change it based on user inputs   */

  const [enteredTitle, updateEnteredTitle] = useState(""); // we have stored the user's title as "enteredTitle"
  const [enteredAmount, updateEnteredAmount] = useState(""); // we have stored the user's amount as "enteredAmount"
  const [enteredDate, updateEnteredDate] = useState("");

  /*********************************************************************************************************************************************************** */

  //These 3 functions are to update the title into variable: "enteredTitle", "enteredAmount", "enteredDate"
  // function titleChangeHandler(event) {
  //   // the event comes built in with JSX
  //   updateEnteredTitle(event.target.value);
  // }
  // function amountChangeHandler(event) {
  //   // the event comes built in with JSX                              We took this portion out and made a internal function in the onChange input (L56)
  //   updateEnteredAmount(event.target.value);
  // }
  // function dateChangeHandler(event) {
  //   // the event comes built in with JSX
  //   updateEnteredDate(event.target.value);
  // }
  /*********************************************************************************************************************************************************** */
  /** Gets the new values put in form and makes a NEW DATA CALLED expenseData */
  function submitHandler(event) {
      // window.alert("Please fill out all fields")
      event.preventDefault();
    
   
     // this will prevent form the form to submitting an empty form. and it won't relode page
    
    const expenseData = {
      //NEW data to be added on to app.js via newExpenses
      expenseDate: new Date(enteredDate),
      expenseTitle: enteredTitle,
      expenseAmount: +enteredAmount,
    };

    console.log("From ExpenseForm", expenseData);
    props.onSaveExpenseData(
      expenseData,
      +enteredAmount    ); // this passes expenseData into the 'onAddExpenseHandler' function as a means print out the added data.

    /*********************************************************************************************************************************************************** */
    /*    To clear    */

    updateEnteredTitle(""); //we have to later include the value component in the input, so we can properly clear it
    updateEnteredAmount("");
    updateEnteredDate("");
  }
  /*********************************************************************************************************************************************************** */

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            onChange={(e) => {
              updateEnteredTitle(e.target.value);
              console.log(enteredTitle);
            }}
            value={enteredTitle} // this is done to properly clear it. In lines 35-37, we are updating the "enteredTitle" variable to be " "
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => {
              updateEnteredAmount(e.target.value);
            }}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2023-03-20"
            max="2025-03-25"
            onChange={(e) => {
              updateEnteredDate(e.target.value);
            }}
            value={enteredDate}
          />
        </div>
      </div>

      <div className="buttonInputs">
        <button type="submit">Add Expense</button>
        <button onClick={props.cancel}>Cancel</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
