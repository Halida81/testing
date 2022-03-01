// import { logDOM } from "@testing-library/react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"


function ExpenseItem(props){
    // console.log(props);

    // const expenseDate = props.date
    const expenseTitle = props.title;
    const expenseAmount = props.price;





    return (
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
        {/* <div>{String(expenseDate)}</div> */}
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
    </div>
    )}

export default ExpenseItem;