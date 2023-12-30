
import './ExpenseItem.css';

function ExpenseItem(props) {
 
  //manipulate date data using seprate variable  its more readable 
  let date = props.date.toLocaleString('en-US', {month : 'long'})
  let day = props.date.toLocaleString('en-US', {day : '2-digit'})
  let year = props.date.getFullYear()

  return (
    
    <div className="expense-item">
      {/* manipulate date data on created new div as can use js expresion access dynamically variables */}
      {/* this code provide date month year dynamicaly manipulate date data in seprate div it jsx- allowing to redable*/}
        <div>
          <div>{date}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;