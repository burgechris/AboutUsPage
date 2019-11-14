import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
 return (
  <nav>
   <div className="nav-content">
    <a href="#" className="brand-logo">Come Code With Us, Danny</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
     <li><Link to="/">Locations</Link></li>
     <li><Link to="/Team">Team</Link></li>
    </ul>
   </div>
  </nav>
 );
}

export default NavBar;