import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    
  //update the user input state in the form
// const [enterTitle, setTitle] = useState('')
// const [enterAmount, setAmount] = useState('')
// const [enterDate, setDate] = useState('')


    //how you can convert the multiple state into a single state.
    const [userInput, setUserInput]= useState({
      Title:'',
      amount:'',
      Date:'',
    })
    const handleTitle=(event)=>{
      setUserInput((prevstate)=>({
        ...prevstate,
        Title: event.target.value,
      }))
    }
    const handleAmount=(event)=>{
      setUserInput({
        ...userInput, //it holds prevstate object values create copy they will immediately executed
        amount :event.target.value, //when amount setUserInput fun call then userInput prev value will updated, when they will execute only pahili value
      })
    }
    const handleDate=(event)=>{
      setUserInput({
        ...userInput,
        Date :event.target.value,
      })
    }
    //add onSubmit Handler
    let onSubmitHandler=(event)=>{
      event.preventDefault()
      // console.log(userInput.Title, userInput.amount, userInput.Date)
      //it will store all targeted value in updatedState
      //and print it
      let updatedState={
        Title:userInput.Title,
        amount :userInput.amount,
        Date : new Date(userInput.Date)
      }
      console.log(updatedState)
    }

    return (
    <div className='new-expense'>
        <form onSubmit={onSubmitHandler}>
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
                    <input type='date' onChange={handleDate}  />
                </div>
            </div>
        
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm;
