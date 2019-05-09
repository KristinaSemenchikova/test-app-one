import * as React from "react";
import './Header.css'
import logo from './../../images/logo.png';

const Header = () => {
    return (
        <header className= "header">
          <img alt = 'logo' src = {logo}/>
        </header>
    )
}
export default Header;
