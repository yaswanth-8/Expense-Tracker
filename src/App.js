import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
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

  const NewExpenseHandler = (newExpense) => {
    console.log("in app.js");
    console.log(newExpense);
  };

  return (
    <div>
      <NewExpense onGotNewExpense={NewExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
