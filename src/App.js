import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 7, 7),
    title: "Work Insurance",
    amount: 12,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 6),
    title: "Car Insurance",
    amount: 20,
  },
  {
    id: "e3",
    date: new Date(2019, 8, 3),
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
