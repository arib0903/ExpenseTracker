import React from "react";
import "./ExpensesFilter.css";
import { useState } from "react";

function ExpensesFilter(props) {
  function filterHandler(event) {
    props.onDisplayFiltered(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
