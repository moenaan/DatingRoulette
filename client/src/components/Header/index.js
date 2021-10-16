import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // navbar starts
    <div class="container-fluid m-0 p-0 mt-0 ms-1">
    <container-fluid mt-0>      
    <div class="topnav">
  <Link class="home-button" to="/" href="#"><h1>Dating❤️Roulette</h1></Link>
  <Link class="profile" to="/me" aria-current="page" href="#">profile</Link>
  <Link class="login-button" to="/login" aria-current="page" href="#">Log In</Link>
  <Link class="signup-button" to="/signup" aria-current="page" href="#">Sign Up</Link>
  <Link class="logout-button" onClick={logout}><h1>Log Out</h1></Link>
  </div>


</container-fluid>
</div>
// navbar ends 

  );
};

export default Header;
