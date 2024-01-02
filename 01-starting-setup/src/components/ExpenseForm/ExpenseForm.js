import React from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    

   
    const handleTitle = (event) => {
      let Title = event.target.value;
      console.log(Title);
    };
  
    const handleAmount = (event) => {
     let Amount  = event.target.value;
      console.log(Amount);
    };
  
    const handleDate = (event) => {
      let Date = event.target.value;
      console.log(Date);
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
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm;
