import { useState } from "react";
import NewExpenses from "./components/ExpenseForm/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

//it is object array it will pass as an props(properties) in another component dynamicaly 
const Dumy_expenses = [
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
 
const App = () => {

const[expenses, setExpenses] = useState(Dumy_expenses)
//how to data populate on ui
    const addExpenseHandler =(expense)=>{
    setExpenses(prevstate=>{
      return[...prevstate,expense]
    })

    // console.log(expenses)
 };

  return (
    <div>
      <NewExpenses onAddExpenseHandler={addExpenseHandler}/>
      {/* <h2>Let's get started!</h2> */}
      {/* Dynamicaly call access object inside the jsx and pass props to child ExpenseItem Components inside the {culy braces} on Each ExpenseItem called */}
      <Expenses items={expenses}/>
    </div> 
  );
}

export default App;
