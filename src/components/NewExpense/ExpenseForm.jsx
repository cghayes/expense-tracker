import React, { useState } from "react";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [show, setShow] = useState(false);

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
      amount: +enteredAmt,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData, show);
    clearData();
    setShow(!show);
  };

  const handleClose = () => {
    clearData();
    setShow(!show);
  };

  const clearData = () => {
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  }

  return show ? (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={handleNewTitle}
              required
              autoFocus
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmt}
              min="0.01"
              step="0.01"
              onChange={handleNewAmt}
              required
            />
          </div>
        </div>
        <div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2021-01-01"
              max="2024-12-31"
              onChange={handleNewDate}
              required
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </form>
  ) : (
    <div className="new-expense__actions">
      <button onClick={() => setShow((prev) => !prev)}>Add New Expense</button>
    </div>
  );
};
