import React from "react";
import { useEffect } from "react";
import "./Budget.css";
function Budget(props) {
  const [enteredAmount, updateEnteredAmount] = React.useState(0);

  // const [updateBudgAmt, setUpdateBudgAmt] = React.useState(props.enteredBudg);

  // useEffect(() => {
  //   updateEnteredAmount(props.enteredAmount - props.expenseItems);
  //   console.log(enteredAmount);
  // });

  return (
    <div className="budgetAmount">
      <label>Enter Bugdet: </label>
      <input
        type="number"
        // min="0.01"
        step="0.01"
        onChange={(e) => {
          updateEnteredAmount(e.target.value);
        }}
        value={enteredAmount}
        className="random"
      />
      <p
        className="random"
        style={{
          color: enteredAmount - props.expenseItems < 0 ? "red" : "green",
        }}
      >
        Remaining Balance: ${enteredAmount}
      </p>
    </div>
  );
}

export default Budget;
