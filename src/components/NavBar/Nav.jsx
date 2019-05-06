import React from 'react';
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  let selectMyStocks = () => {
    props.filterStock('my');
  }
  let selectAllStocks = () => {
    props.filterStock('all');
  }
  let all = '';
  let my = '';
  if (props.filter == 'all') {
    all = s.active
  } else if (props.filter == 'my') {
    my = s.active
  }
  return (
    <nav className={s.nav}>
        <NavLink to='/' className={my} onClick={selectMyStocks}>My stocks </NavLink>
        <NavLink to='/' className={all} onClick={selectAllStocks}>All stocks </NavLink>
    </nav>
  )
}
export default Nav;
