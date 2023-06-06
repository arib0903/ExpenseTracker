import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const charDataPoints = [
    { label: "Jan", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },

    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },

    { label: "SEPT", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];

  for (const expense of props.expenses) {
    const valueMonthNums = expense.expenseDate.getMonth(); // will return month by index (if JAN, then 0)

    charDataPoints[valueMonthNums].value += expense.expenseAmount;
  }

  return <Chart dataPoints={charDataPoints}></Chart>;
}

export default ExpensesChart;
