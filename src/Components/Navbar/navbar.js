import React from "react";

function Navbar() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href="index.html">
          <img src="./assets/images/logo.svg" className="mr-2" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="./assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="ti-layout-grid2"></span>
        </button>
        <ul className="navbar-nav mr-lg-2"></ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              id="profileDropdown"
            >
              <img src="https://via.placeholder.com/40x40" alt="profile" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a className="dropdown-item">
                <i className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="ti-layout-grid2"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
