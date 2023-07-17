import React from 'react'
import NewExpenseForm from './NewExpenseForm';
import "./NewExpense.css"
import Card from "../UI/Card"
function NewExpense(props) {

const expenseDataUpdate = (data) =>{
      props.expenseDataUpdate(data);
}

  return (
    <Card className='new-expense'>
       <NewExpenseForm expenseDataUpdate = {expenseDataUpdate}></NewExpenseForm>
    </Card>
  )
}

export default NewExpense
