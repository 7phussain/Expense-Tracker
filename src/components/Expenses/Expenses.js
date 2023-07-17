import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpensItem";
import { useState } from "react";
function Expenses(props) {
 
    const [filterYear,setFilterYear] = useState(2023);
   
    const filteredExpenses = props.expenses.filter((expense)=>{
        return expense.date.getFullYear() == filterYear
    })

    const yearChangeHandler = (event) =>{
        setFilterYear(event.target.value);
    }
console.log(filteredExpenses);
    return (
        <Card className="expenses">
            <div className="filter-area">
                <label htmlFor="years">Filter By Year</label>
                <select name="year" id="years" onChange={yearChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
            {(filteredExpenses.length!=0)?filteredExpenses.map((expense) => {
                return <ExpenseItem
                    key ={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            }): <p className="not-found">Expenses Not Found For This Year</p>}
        </Card>
    )
}

export default Expenses