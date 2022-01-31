import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const handleFormData = data => {
    props.formData(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleFormData} />
    </div>
  );
}

export default NewExpense;
