import "./ExpenseDate.css";
function ExpenseDate(Calender) {
  const month = Calender.Date.toLocaleString("en-US", { month: "long" });
  const day = Calender.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = Calender.Date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
