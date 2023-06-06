import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
//NUMBER 1

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
    return expense.expenseDate.getFullYear().toString() === currentYear; // this gets the year from the expenseItems and compares with what was selected
  });
  /*********************************************************************************************************************************************************** */
  /*This is the conditional content that will have either the <h1> or the <ExpenseItem> */

  let expenseContents = <h1>NO EXPENSES FOUND FOR {currentYear}</h1>;
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
        <ExpensesFilter selected={currentYear} onDisplayFiltered={display} />

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {/* this expenseContents will either be the default(None) or the list */}
        {expenseContents}

        {/* <ExpenseItem
          date={props.items[0].expenseDate} //We need to put props.items[0].expenseDate, because we are passing an array of itemsects, and we need to access the first itemsect, and then the expenseDate property
          title={props.items[0].expenseTitle} //it wouldn't work with just props because props is an itemsect, and we need to access the first itemsect
          amt={props.items[0].expenseAmount}
        /> */}
        {/* <ExpenseItem
          date={props.items[1].expenseDate}
          title={props.items[1].expenseTitle}
          amt={props.items[1].expenseAmount}
        />
        <ExpenseItem
          date={props.items[2].expenseDate}
          title={props.items[2].expenseTitle}
          amt={props.items[2].expenseAmount}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
