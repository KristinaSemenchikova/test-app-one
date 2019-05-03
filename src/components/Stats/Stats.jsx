import React from "react";
import s from "./Stats.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Stats = props => {
  let charts = props.stocks.map(item => (
    <div key={item.id}>
    <div >
      <div>{item.price}</div>
      <div>{item.name}</div>
    </div>
      <LineChart width={600} height={600} data={item.stats}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
      <div>
        {item.about}
      </div>
    </div>
  ));
  return (
    <nav className={s.stats}>
      <div>{charts}</div>
    </nav>
  );
};
export default Stats;
