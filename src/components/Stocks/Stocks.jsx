import React from "react";
import s from "./Stocks.module.css";
import { NavLink } from "react-router-dom";

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
    let path = "/stocks/" + item.id;
    return (
      <NavLink
        to={path}
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
export default Stocks;
