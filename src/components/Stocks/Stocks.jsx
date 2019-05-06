import React from "react";
import s from "./Stocks.module.css";
import { NavLink,withRouter} from "react-router-dom";
import { LineChart, Line } from "recharts";

const Stocks = props => {
  let findStock = e => {
    let text = e.target.value;
    props.findStock(text)
  };
  let selectStock = e => {
    let id = +e.target.dataset.stockId;
    props.selectStock(id);
  };
  let stocks = props.stocks.map(item => {
    return (
      <NavLink
        to={`${props.match.path}/${item.id}`}
        activeClassName={s.active}
        className={s.selectStock}
        key={item.id}
        data-stock-id={item.id}
        onClick={selectStock}
      >
        <div>
          <div id={s.name}>{item.name} </div>
          <div id={s.shares}>{item.shares} SHARES </div>
        </div>
        <>
          <LineChart width={60} height={50} data={item.stats}>
            <Line type="monotone" dataKey="pv" stroke="#2ECC71" strokeWidth={1} />
          </LineChart>
        </>
        <span id={s.price}>{item.price} </span>
      </NavLink>
    );
  });
  return (
    <nav className={s.stocks}>
      <div className={s.search}>
        <input
          placeholder="Search by stock or market name"
          onChange={findStock}
        />
      </div>
      <div>{stocks}</div>
    </nav>
  );
};
export default withRouter(Stocks);
