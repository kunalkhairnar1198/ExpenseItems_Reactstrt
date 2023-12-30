import './ExpenseItem.css'
const ExpenseDetail = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
        <div className='expense-item__location'>{props.LocationOfExpenditure}</div>
        <div className="expense-item__price">${props.amount}</div>
    </div>
  )
}

export default ExpenseDetail

// //this component is reusable component this component will use another component 