import ExpenseItem from "./components/ExpenseItem";
function App() {

  //it is object array it will pass as an props(properties) in another component dynamicaly 
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      LocationOfExpenditure : 'water',
      date: new Date(2020, 7, 14),
      
    },
    { id: 'e2', title: 'New TV', amount: 799.49, LocationOfExpenditure : 'power', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      LocationOfExpenditure : 'Auto',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      LocationOfExpenditure : 'Desk',
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <p>this also visible</p> */}
      {/* it will make reusable child component inside app.js component passing the props  */}
      {/* 4 function call inside the App compo and pass props expense data 4 times  */}
      
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} LocationOfExpenditure={expenses[0].LocationOfExpenditure} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} LocationOfExpenditure={expenses[1].LocationOfExpenditure} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} LocationOfExpenditure={expenses[2].LocationOfExpenditure} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} LocationOfExpenditure={expenses[3].LocationOfExpenditure} date={expenses[3].date}></ExpenseItem> */}
 
   {/* it has same as previous functional call on each iteration call compo but different logic */}
    {/* if you have ExpenseItem component multiple times for each expense */}
    {/* use map function iterate over expenses array and dynamically generate the components */}
     
     {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}

    </div>
  );
}

export default App;
