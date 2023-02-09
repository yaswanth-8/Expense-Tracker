import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const DropDownHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedDropDown={DropDownHandler}
        selectedYear={filteredYear}
      />

      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
