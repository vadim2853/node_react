import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";
import { LineChart, Line } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 200, amt: 2400 },
  { name: "Page A", uv: 700, pv: 5400, amt: 2400 },
  { name: "Page A", uv: 4100, pv: 2400, amt: 2400 },
];
const renderCustomizedLabel = (props) => {
  // console.log(props);
  const { x, y, width, height, value } = props;
  return (
    <g>
      <text x="96%" y={y + height / 2}>
        {((value / calcTotalValue(customData)) * 100).toFixed(0)}%
      </text>
      <text x="92%" y={y + height / 2}>
        {value}
      </text>
    </g>
  );
};
const calcTotalValue = (o) => {
  let total = 0;
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      const item = o[key];
      total += item.value;
    }
  }
  return total;
};

const customData = [
  { name: "Very likely", value: 522 },
  { name: "Somewhat likely", value: 311 },
  { name: "Im not sure", value: 201 },
  { name: "Somewhat unlikely", value: 38 },
  { name: "Very unlikely", value: 20 },
];
function App() {

  return (
    <div className="App">
      233535325
      <BarChart data={customData} height={500} width={800} margin={{ top: 10, right: 10, bottom: 10, left: 10 }} layout="vertical">
        <CartesianGrid strokeWidth="1" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <YAxis type="number" yAxisId="right" orientation="right" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#606db3">
          <LabelList position="right" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </div>
  );
}

export default App;
