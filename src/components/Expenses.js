
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
        <div>
      <ExpenseItem title={props.expense[0].title} price={props.expense[0].amount} date={props.expense[0].date}/>
      <ExpenseItem title={props.expense[1].title} price={props.expense[1].amount} date={props.expense[1].date}/>
      <ExpenseItem title={props.expense[2].title} price={props.expense[2].amount} date={props.expense[2].date}/>
        </div>
    )
}

export default Expenses;