
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
function ExpenseItem(props) {
 
  return (
    
    <div className="expense-item">

      {/* this ExpenseDate and ExpenseDetail is child component its make reusable component and passing porps in the child components elements */}
     <ExpenseDate date={props.date}/>
        
     <ExpenseDetail LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount}  location={props.location}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;