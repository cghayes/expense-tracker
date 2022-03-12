import React from 'react';

import { ExpenseForm } from './ExpenseForm';

export const NewExpense = (props) => {
  const handleSaveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData}  /> 
      {/* value for onSaveExpenseData prop is a function called within ExpenseForm */}
    </div>
  )
}
