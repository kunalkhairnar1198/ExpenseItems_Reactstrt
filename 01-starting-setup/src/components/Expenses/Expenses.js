import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props)=> {
  return (

     <Card className="expenses">
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    {/* it has same as previous functional call on each iteration call compo but different logic */}
    {/* if you have 100 Expenses how can pass it in props on each ExpenseItem call */}
    {/* The map function is used to iterate over each element in the expenses array. For each expense, it dynamically generates (like prev calls on ExpenseItems) an ExpenseItem component with the relevant props. */}
     
    {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          date={expense.date}
        />
      ))}

    </Card>
   
   
  );
}

export default Expenses;