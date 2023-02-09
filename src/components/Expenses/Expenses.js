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
          // unique id
          key={expense.id}
          //  we add it because, when new expense is added
          //  react just adds the div at last and updates every
          //  element. we actually add the new element in the beginning and
          //  prev elements next to it, but react creates div at last and
          //  updates value so that the new element is in the begining this
          //  just reduces the performance
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
