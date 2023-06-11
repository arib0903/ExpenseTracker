import React, { useEffect, useState } from "react";
import "./Budget.css";

function Budget(props) {
  const [enteredAmount, setEnteredAmount] = useState(0);

  useEffect(() => {
    setEnteredAmount((e)=>e - props.expenseItems);
  }, [props.expenseItems]);

  return (
    <div className="budgetAmount">
      <label>Enter Budget:</label>
      <input
        type="number"
        step="0.01"
        onChange={(e) => {
          setEnteredAmount(e.target.value);

        }}
        className="random"
      />
      <p
        className="random"
        style={{
          color: enteredAmount < 0 ? "red" : "green",
        }}
      >
        Remaining Balance: ${enteredAmount}
      </p>
    </div>
  );
}

export default Budget;
