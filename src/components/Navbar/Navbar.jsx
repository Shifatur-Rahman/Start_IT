import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* logo */}
        <div className="logo">
          <a href="#">
            <img src="../images/logo-light.png" alt="" />
          </a>
        </div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div class="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li className="services">
              <a href="/">Portfolio</a>
              {/* <!-- DROPDOWN MENU --> */}
              <ul class="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 3</a>
                </li>
                <li>
                  <a href="/">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li className="services">
              <a href="/">Element</a>
              {/* <!-- DROPDOWN MENU --> */}
              <ul class="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 3</a>
                </li>
                <li>
                  <a href="/">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
