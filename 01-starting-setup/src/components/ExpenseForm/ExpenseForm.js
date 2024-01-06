import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    
  //update the user input state in the form
const [enterTitle, setTitle] = useState('')
const [enterAmount, setAmount] = useState('')
const [enterDate, setDate] = useState('')
const [enterExpenditure, setExpenditure] = useState('')


    const handleTitle=(event)=>{
       setTitle(event.target.value)  
    }
    const handleAmount=(event)=>{
       setAmount(event.target.value)
    }
    const handleDate=(event)=>{
      setDate(event.target.value)
    }
    const handleExpenditure=(event)=>{
      setExpenditure(event.target.value)
    }

    //add onSubmit Handler
    let onSubmitHandler=(event)=>{
      event.preventDefault()
      //it will store all targeted value in updatedState
      //and print it
      let updatedState={
        title:enterTitle,
        amount :enterAmount,
        LocationOfExpenditure:enterExpenditure,
        date : new Date(enterDate)
      }
      console.log('store updated state in forms',updatedState)
      //call the parent function and sent updated data in NewExpense parent Component
      props.onSaveExpenseData(updatedState)

      setTitle('')
      setAmount('')
      setDate('')
      setExpenditure('')

    }

    return (
    
        <form onSubmit={onSubmitHandler}>
             <h1>cretate form Expense And handle with vanila javascript</h1>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enterTitle} onChange={handleTitle}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={enterAmount} onChange={handleAmount} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enterDate} onChange={handleDate}  />
                    </div>
                    <div className='new-expense__control'>
                        <label>Expenditure</label>
                        <input type='text' value={enterExpenditure} onChange={handleExpenditure}  />
                    </div>
                </div>
        
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    
  )
}

export default ExpenseForm;
