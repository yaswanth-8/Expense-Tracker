import ExpenseItem from "./components/ExpenseItem";
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      />
      <ExpenseItem
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount}
      />
      <ExpenseItem
        title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount}
      />
    </div>
  );
}

export default App;
