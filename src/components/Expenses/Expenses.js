import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  let totalAmount = 0;
  const [filteredYear, setFilteredYear] = useState("2020");
  const DropDownHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let length = filteredExpenses.length;
  for (let i = 0; i < length; i++) {
    totalAmount += filteredExpenses[i].amount;
    console.log(filteredExpenses[i].amount);
  }

  // console.log(totalAmount);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedDropDown={DropDownHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      <div className="total">Total Amount Spent : {totalAmount}</div>
    </Card>
  );
}

export default Expenses;
