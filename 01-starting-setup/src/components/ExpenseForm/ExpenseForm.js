import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    
  //update the user input state in the form
const [enterTitle, setTitle] = useState('')
const [enterAmount, setAmount] = useState('')
const [enterDate, setDate] = useState('')

   
    const handleTitle = (event) => {
      setTitle(event.target.value);
      console.log(enterTitle)
    };
  
    const handleAmount = (event) => {
      setAmount(event.target.value);
      console.log(enterAmount)
    };
  
    const handleDate = (event) => {
      setDate(event.target.value);
      console.log(enterDate)
    };

    const addExpense = () => {
      console.log('Adding expense:', enterTitle, enterAmount, enterDate);
    };

    return (
    <div className='new-expense'>
        <form>
             <h1>cretate form Expense And handle with vanila javascript</h1>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={handleTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={handleAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={handleDate} />
                </div>
            </div>
        
            <div className='new-expense__actions'>
                <button type='submit' onClick={addExpense}>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm;
