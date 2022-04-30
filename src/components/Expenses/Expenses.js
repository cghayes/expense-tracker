import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [filtered, setFiltered] = useState([]);

  const handleSetSelectYear = (selected) => {
    setSelectedYear(selected);
    console.log(filtered)
  }

  useEffect(() => {
    let filtered;
    if (selectedYear !== "all") {
      filtered = items.filter(
        (item) => item.date.getFullYear().toString() === selectedYear
      );
      setFiltered(filtered);
    } else {
      setFiltered(items);
    }
  }, [selectedYear, items]);

  return (
    <div>
      <Card>
        <ExpenseFilter
          onSelectYear={handleSetSelectYear}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filtered} />
        <ExpensesList selectedYear={selectedYear} filtered={filtered} />
      </Card>
    </div>
  );
}

export default Expenses;
