import React, { useState } from "react";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleNewTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleNewAmt = (e) => {
    setEnteredAmt(e.target.value);
  };

  const handleNewDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={handleNewTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmt}
            min="0.01"
            step="0.01"
            onChange={handleNewAmt}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2021-01-01"
            max="2024-12-31"
            onChange={handleNewDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
