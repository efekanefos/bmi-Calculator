import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        style={{ background: "rgba(255,255,255, 0.1)" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BMI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/whatisBMI"
                >
                  What is BMI?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
