
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';



const ExpenseItem = (props) => {

    let DeleteHnadler = (e) => {
      console.log("hey clicked");
  
      let currentCard = e.target.closest(".expense-item");
      let parentOfExpense = currentCard.parentElement;
      parentOfExpense.removeChild(currentCard);
      
    };
    
  return (
    
    <Card className="expense-item" >

      {/* this ExpenseDate and ExpenseDetail is child component its make reusable component and passing porps in the child components elements */}
     <ExpenseDate date={props.date}/>
     <ExpenseDetail LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount}  location={props.location}   title={props.title} />
    
      {/* <div className="expense-item__description">
        <h2>{props.title}</h2>
          <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
          <div className="expense-item__price">${props.amount}</div>
      </div> */}
      <button onClick={DeleteHnadler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;