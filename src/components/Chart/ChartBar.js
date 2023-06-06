import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  // if (props.value == 0) {
  //   props.value = "-";
  // }

  return (
    <div className="chart-bar">
      {props.value != 0 && (
        <div className="chart-bar__value">{props.value}</div>
      )}
      {props.value == 0 && <p></p>}

      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
