import React, { useState } from "react";

import { expenses } from "../../constants";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const ExpenseList = () => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const handleSetSelectYear = (selected) => {
    setSelectedYear(selected);
    console.log(selectedYear);
  }

  return (
    <div>
      <Card>
        <ExpenseFilter onSelectYear={handleSetSelectYear} selected={selectedYear}/>
        {expenses.map(function (x, i) {
          return (
            <ExpenseItem
              key={i}
              date={x.date}
              title={x.title}
              amount={x.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default ExpenseList;
