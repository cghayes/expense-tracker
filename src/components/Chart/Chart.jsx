import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = ({ expenses }) => {
  const dataPointValues = expenses.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(expenses);
  
  return (
    <div className="chart">
      {expenses.map((exp) => (
        <ChartBar
          key={exp.label}
          value={exp.value}
          maxValue={totalMaximum}
          label={exp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
