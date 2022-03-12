import React from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { expenses } from "./constants";

import "./components/styles.scss";

const App = () => {
  const handleAddExpense = (expense) => {
    console.log("in app.js")
    console.log(expense);
  }
  
  return (
    <div className="expenses">
      <NewExpense onAddExpense={handleAddExpense}/>
      <ExpenseList items={expenses}/>
    </div>
  );
}

export default App;
