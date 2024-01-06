import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props)=> {
  
 const[filterYear, setFilterYear] = useState('2020')
 
    const filterChangeHandler =(SelectedYear)=>{
      setFilterYear(SelectedYear)
    }
  return (

     <Card className="expenses">
 
      <ExpenseFilter selected={filterYear} onChangeHandler={filterChangeHandler} />

    {/* it has same as previous functional call on each iteration call compo but different logic */}
    {/* if you have 100 Expenses how can pass it in props on each ExpenseItem call */}
    {/* The map function is used to iterate over each element in the expenses array. For each expense, it dynamically generates (like prev calls on ExpenseItems) an ExpenseItem component with the relevant props. */}
     
    {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}

    </Card>
   
   
  );
}

export default Expenses;