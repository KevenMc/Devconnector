import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i>devConnector{" "}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/poss">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user">
              <span className="hide-sm">Dashboard</span>
            </i>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fas fa-sign-out-alt">
              <span className="hide-sm">Register</span>
            </i>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-out-alt">
              <span className="hide-sm">Login</span>
            </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;