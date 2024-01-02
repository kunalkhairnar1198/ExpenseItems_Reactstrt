import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
    
  // let title = props.title
  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by react')

    const updateHandler = () => {
          // title = 'updated!';
          setTitle('updated!')
          console.log(title)
    };
    //adding useState when updateAmount click then umount will changed
const [amount, setAmount] = useState(props.amount)
    const updateAmount =()=>{
        setAmount('100')
        console.log(amount)
    }
    
  return (
    
    <Card className="expense-item" >

      {/* this ExpenseDate and ExpenseDetail is child component its make reusable component and passing porps in the child components elements */}
     <ExpenseDate date={props.date}/>
     <ExpenseDetail LocationOfExpenditure={props.LocationOfExpenditure} amount={amount}  location={props.location}   title={title} />
    
      {/* <div className="expense-item__description">
        <h2>{props.title}</h2>
          <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
          <div className="expense-item__price">${props.amount}</div>
      </div> */}
      <button className='expense-item_btn' onClick={updateHandler}>Delete Expense</button>
      <button className='expense-item_btn' onClick={updateAmount}>update amount</button>
    
    </Card>
  );
}

export default ExpenseItem;