import React from "react";
import s from "./Stats.module.css";
import { LineChart, Line } from "recharts";

const Stats = props => {
  let addToMy = (e) => {
    let id = +e.target.dataset.id;
    props.addToMyStocks(id)
  };
  let deleteFromMy = (e) => {
    let id = +e.target.dataset.id;
    props.deleteFromMyStocks(id)
  };
  let charts = props.stock.map(item => (
    <div key={item.id}>
      <div>
        <div>{item.price}</div>
        <div>{item.name}</div>
      </div>
      <LineChart width={600} height={500} data={item.stats}>
        <Line type="monotone" dataKey="pv" stroke="#2ECC71" strokeWidth={2} />
      </LineChart>
      <div>{item.about}</div>
      <div className={s.stockButtons}>
        <button data-id = {item.id} onClick = {deleteFromMy}>Sell</button>
        <button data-id = {item.id} onClick = {addToMy}>Buy</button>
      </div>
    </div>
  ));
  return (
    <nav className={s.stats}>
      <div className={s.charts}>{charts}</div>
    </nav>
  );
};
export default Stats;
