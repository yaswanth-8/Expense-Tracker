import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditingMode] = useState(false);
  const RecievedExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onGotNewExpense(newExpense);
    enableEditingHandler();
  };

  const enableEditingHandler = () => {
    setEditingMode(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={enableEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onGotExpense={RecievedExpenseHandler}
          onCancel={enableEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
