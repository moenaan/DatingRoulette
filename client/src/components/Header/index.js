import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
	    <Link className="home-button" to="/" href="#"><h1>Dating❤️Roulette</h1></Link>
    <button className= "logout-button" onClick={logout}><h1>Log Out</h1>
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/me" aria-current="page" href="#">friends</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active" to="/login" aria-current="page" href="#">Log In</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
// important nav header starts
//     <nav class="navbar">
//   <div class="container-fluid">
//     <Link className="home-button" to="/" href="#"><h1>Dating❤️Roulette</h1></Link>
//     <button className= "logout-button" onClick={logout}><h1>Log Out</h1>
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="navbarNavDropdown">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
//         <li class="nav-item">
//           <Link class="nav-link active" to="/me" aria-current="page" href="#">friends</Link>
//         </li>
//         <li class="nav-item">
//           <Link className="nav-link active" to="/login" aria-current="page" href="#">Log In</Link>
//         </li>
//         <li class="nav-item">
//           <Link className="nav-link active" to="/signup" aria-current="page" href="#">Sign Up</Link>
//         </li>
//         <li class="nav-item">
//           {/* <link className="btn onClick={logout}">Log Out</link> */}
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// important nav header ends


    // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    //   <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
    //     <Link className="text-dark" to="/">
    //       <h1 className="m-0" style={{ fontSize: '3rem' }}>
    //         Dating❤️Roulette
    //       </h1>
    //     </Link>
    //     <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
    //       Welcome
    //     </p>
    //     <div>
    //       {Auth.loggedIn() ? (
    //         <>
    //         <button>
    //           <Link className="btn btn-lg btn- m-2" to="/me">
    //             View My Profile
    //           </Link>
    //           </button>
    //           <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link className="btn btn-lg btn-primary m-2" to="/login">
    //             Login
    //           </Link>
    //           <Link className="btn btn-lg btn-light m-2" to="/signup">
    //             Signup
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
