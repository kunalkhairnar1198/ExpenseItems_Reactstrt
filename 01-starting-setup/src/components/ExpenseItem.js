import './ExpenseItem.css';

function ExpenseItem() {

  //add variable in jsx component it is use dynamically inside the javascript exprestion 
  let expenseDate = new Date(2010, 10, 11);
  let expenseTitle = 'Car Insurance';
  let expenseAmount = 294.67;
  let LocationOfExpenditure = 'where spend the money';

  return (
    //style
    // this is not a html code it is a jsx code inside the javascript 
    // they not use class keyword adding style into the jsx element because this class keyword is reserve keyword in javascript it is defining class in the oops in js instead of className
    //it is use className in the cammelCase


    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className='expense-item__location'>{LocationOfExpenditure}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;