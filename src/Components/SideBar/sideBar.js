import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="ti-home menu-icon"></i>
            <span className="menu-title">Admin Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/all-applications">
            <i className="ti-settings menu-icon"></i>
            <span className="menu-title">All Applications</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/all-applicants">
            <i className="ti-settings menu-icon"></i>
            <span className="menu-title">All Applicants</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/all-admins">
            <i className="ti-settings menu-icon"></i>
            <span className="menu-title">All Admins</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin-registeration">
            <i className="ti-settings menu-icon"></i>
            <span className="menu-title">Admin</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
