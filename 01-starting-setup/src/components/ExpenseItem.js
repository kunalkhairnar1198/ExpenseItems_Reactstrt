import './ExpenseItem.css';

function ExpenseItem(props) {

  //add variable in jsx component it is use dynamically inside the javascript exprestion 
  // let expenseDate = new Date(2010, 10, 11);
  // let expenseTitle = 'Car Insurance';
  // let expenseAmount = 294.67;
  // let LocationOfExpenditure = 'where spend the money';

  //props is properties it allow to access another (parent component) component prop can access inside the child(component i.e expendseItem.js)
  //React allows the single parameter can access because props data store in key-value pair it access like props.key
  //  it makes a ReactComponent Reusable and interactive 

  return (
    //style
    // this is not a html code it is a jsx code inside the javascript 
    // they not use class keyword adding style into the jsx element because this class keyword is reserve keyword in javascript it is defining class in the oops in js instead of className
    //it is use className in the cammelCase


    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;