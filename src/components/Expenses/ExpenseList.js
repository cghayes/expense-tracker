import React from "react";

import { expenses } from "../../constants";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = () => {
  return (
    <Card>
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
