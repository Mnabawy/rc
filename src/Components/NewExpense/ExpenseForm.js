import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            min="0.01"
            step="0.01"
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
