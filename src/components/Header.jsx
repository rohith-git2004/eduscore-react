import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container-fluid px-lg-5">

        <span className="navbar-brand fw-bold fs-4">
          EduScore Portal
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/students">Student Details</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/results">Results</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
