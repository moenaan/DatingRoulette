import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
    <div class="topnav">
  <Link class="home-button" to="/" href="#"><h1>Dating❤️Roulette</h1></Link>
  <Link class="leaderboards" to="/me" aria-current="page" href="#">friends</Link>
  <Link class="login-button" to="/login" aria-current="page" href="#">Log In</Link>
 <button class="logout-button" onClick={logout}><h1>Log Out</h1></button>
  </div>


</nav>
    
  );
};

export default Header;
