import React from "react";

// import "./ExpenseList.css"
import { expenses } from "../constants";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const ExpenseList = () => {
  return (
    <Card className="expenses">
      {expenses.map(function(x, i) {
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
  );
}

export default ExpenseList;
