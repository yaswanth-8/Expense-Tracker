import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const DropDownHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedDropDown={DropDownHandler}
        selectedYear={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
