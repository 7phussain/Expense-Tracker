import React, { useState } from 'react'
import "./NewExpenseForm.css"
function NewExpenseForm(props) {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: 0,
    date: ""
  });
  const [newExpenseState, setNewExpenseState] = useState(false);
  const expenseChangehandler = (event) => {
    const { name, value } = event.target;
    setExpenseData((pre) => {
      return { ...pre, [name]: value };
    })
  }

  const expenseDataUpdate = () => {
    const date = new Date(expenseData.date);
    const { title, amount } = expenseData;
    props.expenseDataUpdate({ date, title, amount, id: Math.random().toString() });
    setExpenseData({
      title: "", amount: 0, date: ""
    })
  }

  const formHandler = (event) => {
    event.preventDefault();
  }

  const newExpenseStateChanger = (caller) => {
    setNewExpenseState(caller);
  }

if(newExpenseState){
  
}










  return (newExpenseState?
         <form className='new-expense-form' onSubmit={formHandler}>
          <div className="inputs">
            <div className="input">
              <label htmlFor="title">Title</label>
              <input type="text" value={expenseData.title} id='title' name='title' onChange={expenseChangehandler} />
            </div>
            <div className="input">
              <label htmlFor="amount">Amount</label>
              <input type="number" value={expenseData.amount} id='amount' name='amount' onChange={expenseChangehandler} min="0.01" step="0.01" />
            </div>
            <div className="input">
              <label htmlFor="date">Date</label>
              <input type="date" value={expenseData.date} id='date' name='date' onChange={expenseChangehandler} min="2019-01-01" max="2023-12-31" />
            </div>
          </div>
          <div className='submit-button-wrapper'>
            <button className='cancel' type='button' onClick={() => newExpenseStateChanger(false)}>Cancel</button>
            <button type='submit' onClick={expenseDataUpdate}>Add Expense</button>
          </div>
        </form>:<button id='new-expense-button' className='cancel' onClick={()=>newExpenseStateChanger(true)}>Add new Expense</button>
  )
}

export default NewExpenseForm