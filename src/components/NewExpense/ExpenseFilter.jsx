import React from 'react'

const ExpenseFilter = (props) => {
  const handleSelectYear = (e) => {
    props.onSelectYear(e.target.value);
  }

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={handleSelectYear}>
          <option value="all">All</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;