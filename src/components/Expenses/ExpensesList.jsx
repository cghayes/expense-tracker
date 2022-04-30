import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filtered }) => {
  const message = (
    <p className="expense-filter__message">No expenses found :(</p>
  );

  return filtered.length ? (
    filtered.map((exp) => (
      <ExpenseItem
        key={exp.id}
        date={exp.date}
        title={exp.title}
        amount={exp.amount}
      />
    ))
  ) : (
    <span>{message}</span>
  );
};

export default ExpensesList;
