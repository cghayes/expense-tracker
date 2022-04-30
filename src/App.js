import React, { useState } from "react";

// import { DUMMY_EXPENSES } from "./constants";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

import "./components/styles.scss";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  }
  
  return (
    <div className="expenses">
      <NewExpense onAddExpense={handleAddExpense}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
