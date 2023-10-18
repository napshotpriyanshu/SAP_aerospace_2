import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            SAP AEROSPACE
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/teams"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Teams
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          {click ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;