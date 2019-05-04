import React from 'react';
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <nav className = {s.nav}>
       <div>
         <NavLink to = '/mystocks'>My stocks </NavLink>
       </div>
       <div>
       <NavLink to = '/stocks'>All stocks </NavLink>
       </div>
    </nav>
    )
}
export default Nav;
