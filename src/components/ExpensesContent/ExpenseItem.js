import "./ExpenseItem.css"; //This is to import the CSS file.
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";
import Budget from "../UserBudget/Budget";

//NUMBER 2

function ExpenseItem(props) {
  const [title, updateTitle] = useState(props.title); // we pass props.title because we need to pass the initial state in useState.

  // function clickHandler() {
  //   updateTitle("Updated!"); //we use updateTitle to update the state. THIS DOESN'T UPDATE THE STATE IMMEDIATELY.
  //   console.log(title); // so this will console log the old state, because it is not updated yet. But it will output the new state.""
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
      {/* <button onClick={clickHandler}>Change</button> */}
    </Card>
  );
}

export default ExpenseItem;
