import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props)=> {
  
 const[filterYear, setFilterYear] = useState('2020')
 
    const filterChangeHandler =(SelectedYear)=>{
      setFilterYear(SelectedYear)
      console.log('selected year print',SelectedYear)
    }
    
    //work filter functionality
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
    });

  //  console.log('----->',filteredExpenses)

  return (

     <Card className="expenses">
 
      <ExpenseFilter selected={filterYear} onChangeHandler={filterChangeHandler} />
{/* adding conditional rendering  using ternary exresion in jsx*/}
  
  {/* {filteredExpenses.length === 0 &&  <p>No Expenses Found.</p>}
  
    {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ):(
      filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            date={expense.date}
          />
        ))
   )} */}

   <ExpensesList items={filteredExpenses} />
   
    </Card>
   
   
  );
}

export default Expenses;