import './ExpenseDate.css'

function ExpenseDate(props) {
    let date = props.date.toLocaleString('en-US', {month : 'long'})
    let day = props.date.toLocaleString('en-US', {day : '2-digit'})
    let year = props.date.getFullYear()

    return (
     <div className='expense-date'>
        <div className="expense-date__month">{date}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
  )
}

export default ExpenseDate

//make new component for this component is reusable with importing css  
//parend componet will pass props in another componet 
//this component can accept specific date object properties props
//it is make ExpenseDate component will redable smaller and reusable to another components
