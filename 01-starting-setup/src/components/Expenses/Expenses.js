import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
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

      <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        
    </Card>
   
   
  );
}

export default Expenses;