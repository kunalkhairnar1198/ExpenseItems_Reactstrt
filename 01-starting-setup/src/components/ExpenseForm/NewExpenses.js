import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpenses(props) {
const [isEdited, setIsEdited]= useState(false)

  // received child function compo entered data and make new obj with id
  const saveExpenseDataHandler =(enteredData)=>{
  console.log(enteredData)
      const updatedData = {
        ...enteredData,
        id:Math.random().toString()
    }
    props.onAddExpenseHandler(updatedData)
    setIsEdited(false) 
    console.log('reset edit mode')
    console.log(updatedData)
    
  }

  const StartEditingHandler =()=>{
    setIsEdited(true)
  }
  const StopEditingHandler =()=>{
    setIsEdited(false)
  }

  return (
    <div className='new-expense'>
        {!isEdited && (<button type='button' onClick={StartEditingHandler}>Add New Expense</button>)}
      {isEdited &&(<ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={StopEditingHandler}/>)}
    </div>
  )
}

export default NewExpenses
