import "./ExpenseDate.css";

//NUMBER 3

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //Gets the month in long form(words)
  const Year = props.date.toLocaleString("en-US", { year: "numeric" }); //gets the year in numeric form(2023)
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" }); //gets the day in 2 digit form(13)

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{Day}</div>
    </div>
  );
}

export default ExpenseDate;
