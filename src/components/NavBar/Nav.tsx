import * as React from "react";
import './Nav.css'
import {NavProps} from '../Interfaces/Interfaces';

const Nav = (props : NavProps) => {
  let selectMyStocks = () => {
    props.filterStock('my');
  }
  let selectAllStocks = () => {
    props.filterStock('all');
  }
  let all = '';
  let my = '';
  if (props.filter === 'all') all = "active";
  if (props.filter === 'my') my = "active";
  return (
    <nav className= "nav">
      <div className={my} onClick={selectMyStocks}>My stocks </div>
      <div className={all} onClick={selectAllStocks}>All stocks </div>
    </nav>
  )
}
export default Nav;
