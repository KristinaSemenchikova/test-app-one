import * as React from "react";
import "./Stats.css";
import { LineChart, Line } from "recharts";
import {StatsProps} from '../Interfaces/Interfaces'

const Stats = (props : StatsProps) => {
  let addToMy = (e:any) => {
    let id = +e.target.dataset.id;
    props.addToMyStocks(id)
  };
  let deleteFromMy = (e:any) => {
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
      <div className= "stockButton"> {item.isAdded
        ? <button data-id={item.id} onClick={deleteFromMy}>Sell</button>
        : <button data-id={item.id} onClick={addToMy}>Buy</button>
      }
      </div>
    </div>
  ));
  return (
    <nav className="stats">
      <div className= "charts">{charts}</div>
    </nav>
  );
};
export default Stats;
