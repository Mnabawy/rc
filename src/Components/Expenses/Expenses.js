import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  console.log(props);
  return (
    <Card className="expenses">
      {props.items.map(expense => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
