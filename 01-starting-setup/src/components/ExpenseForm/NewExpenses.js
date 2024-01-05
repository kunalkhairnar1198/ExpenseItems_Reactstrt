import React from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpenses(props) {

  // received child function compo entered data and make new obj with id
  const saveExpenseDataHandler =(enteredData)=>{
  console.log(enteredData)
      const updatedData = {
        ...enteredData,
        id:Math.random().toString()
    }
    props.onAddExpenseHandler(updatedData)
    console.log(updatedData)
    
  }

  return (
    <div className='new-expense'>
        
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpenses
