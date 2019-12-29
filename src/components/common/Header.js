import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "orange" };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        React/Flux Demo
      </a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            activeStyle={activeStyle}
            exact
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            activeStyle={activeStyle}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeStyle={activeStyle}
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeStyle={activeStyle}
            to="/authors"
          >
            Authors
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
