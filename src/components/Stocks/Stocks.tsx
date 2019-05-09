import * as React from "react";
import  "./Stocks.css";
import { NavLink} from "react-router-dom";
import { LineChart, Line } from "recharts";
import {StocksProps} from '../Interfaces/Interfaces'

const Stocks = (props: StocksProps) => {
  let findStock = (e: any) => {
    let text = e.target.value;
    props.findStock(text)
  };
  let selectStock = (e: any) => {
    let id = +e.target.dataset.stockId;
    props.selectStock(id);
  };
  let stocks = props.stocks.map(item => {
    return (
      <NavLink
        to={`/stock/${item.id}`}
        activeClassName="active"
        className="selectStock"
        key={item.id}
        data-stock-id={item.id}
        onClick={selectStock}
      >
        <div onClick={selectStock} data-stock-id={item.id}>
          <div id="name">{item.name} </div>
          <div id="shares">{item.shares} SHARES </div>
        </div>
        <>
          <LineChart width={60} height={50} data={item.stats}>
            <Line type="monotone" dataKey="pv" stroke="#2ECC71" strokeWidth={1} />
          </LineChart>
        </>
        <span id="price">{item.price} </span>
      </NavLink>
    );
  });
  return (
    <nav className="stocks">
      <div className="search">
        <input
          placeholder="Search by stock or market name"
          onChange={findStock}
        />
      </div>
      <div>{stocks}</div>
    </nav>
  );
};
export default Stocks;
