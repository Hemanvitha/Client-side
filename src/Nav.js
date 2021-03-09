import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const style = {
        color: 'white'
    };
   
  return (
    <nav>
        <ul className = "Links">
            <Link style={style} to = "/shop">
            <li>Shop</li>
            </Link>
           <Link style = {style} to = "/about">
           <li>About</li>
           </Link>
           
        </ul>
    </nav>
  );
}

export default Nav;
