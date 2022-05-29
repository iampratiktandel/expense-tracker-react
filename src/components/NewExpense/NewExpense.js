import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);
  
  const addExpenseHandler = () => {
    setIsAddExpense(true);
  }
  const cancelFormHandler = () => {
    setIsAddExpense(false);
  }
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsAddExpense(false);
  }

  return (
    <div className='new-expense'>
      { isAddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler} /> }
      { !isAddExpense && <button onClick={addExpenseHandler}>Add New Expense</button> }
    </div>
  );
};

export default NewExpense;