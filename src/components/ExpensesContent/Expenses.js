import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, {useState } from "react";

import ExpensesChart from "./ExpensesChart";
//NUMBER 1

//This is the parent component that serves as a way to update the state of the ExpensesFilter component
//This also serves to encompass the actual output of the expenses that we had just added, by the ExpensesItem component
//We also will either output the ExpensesItem component or the <h1> based on the year that was selected.

//Expenses is being called by App.js,   The prop is going to be 'items' which currently inlcude the list of items available
function Expenses(props) {
const [currentYear, UpdatedYear] = useState("2023");


  function display(selectedYear) {
    UpdatedYear(selectedYear);
    console.log(selectedYear);
  }

  /*********************************************************************************************************************************************************** */
  /*Filtering from list based on YEAR */


  //This is to filter the expenseItems based on the 'currentYear' that we have updated based on what was selected
  let filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === currentYear;
  });
  // let filteredExpenses = props.expenseItems.filter((expense) => {
  //   return expense.expenseDate.getFullYear().toString() === currentYear && valid;
  // });
  /*********************************************************************************************************************************************************** */
  /*This is the conditional content that will have either the <h1> or the <ExpenseItem> */

  let expenseContents = (
    <h1
      style={{
        fontSize: "25px",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      NO EXPENSES FOUND FOR <div style={{ color: "red" }}>{currentYear}</div>
    </h1>
  );


  if (filteredExpenses.length > 0) {
    expenseContents = filteredExpenses.map((expense, id) => (
      <ExpenseItem
        key={id}
        title={expense.expenseTitle}
        date={expense.expenseDate}
        amt={expense.expenseAmount}
      />
    ));
  }

  /*********************************************************************************************************************************************************** */

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={currentYear}
          onDisplayFiltered={display}
        />

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {/* this expenseContents will either be the default(None) or the list */}
        {expenseContents}
      </Card>
    </div>
  );
}

export default Expenses;
