import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
      <nav className = {s.nav}>
       <div>
         My stocks
       </div>
       <div>
         Buy stocks
       </div>
       <div>
         Pending orders
       </div>
       <div>
         Insights
       </div>
       <div>
        Settings
       </div>
       <div>
       History
       </div>
    </nav>
    )
}
export default Nav;
