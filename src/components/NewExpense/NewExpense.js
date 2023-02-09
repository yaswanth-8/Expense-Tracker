import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const RecievedExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random.toString(),
    };
    props.onGotNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onGotExpense={RecievedExpenseHandler} />
    </div>
  );
};

export default NewExpense;
