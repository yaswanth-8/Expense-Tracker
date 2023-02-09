import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    date: new Date(2023, 7, 7),
    title: "Work Insurance",
    amount: 12,
  },
  {
    date: new Date(2023, 2, 6),
    title: "Car Insurance",
    amount: 20,
  },
  {
    date: new Date(2023, 8, 3),
    title: "Bike Insurance",
    amount: 30,
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const NewExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onGotNewExpense={NewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
