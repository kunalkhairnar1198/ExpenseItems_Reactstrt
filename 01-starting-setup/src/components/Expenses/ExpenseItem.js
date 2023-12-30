
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
 
  return (
    
    <Card className="expense-item">

      {/* this ExpenseDate and ExpenseDetail is child component its make reusable component and passing porps in the child components elements */}
     <ExpenseDate date={props.date}/>
    
      <div className="expense-item__description">
        <h2>{props.title}</h2>
          <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
          <div className="expense-item__price">${props.amount}</div>
      </div>
      
     {/* <ExpenseDetail LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount}  location={props.location}   title={props.title} /> */}
    </Card>
  );
}

export default ExpenseItem;