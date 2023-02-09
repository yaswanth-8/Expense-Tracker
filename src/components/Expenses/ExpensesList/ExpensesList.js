import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">Expenses Not Found</p>;
  }

  return (
    <ul className="expenses-list">
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
    </ul>
  );
}

export default ExpensesList;
