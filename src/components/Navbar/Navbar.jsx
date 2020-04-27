import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid fixed-top" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" to="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link active" to="/blog">
                Blog <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link active" to="/music">
                Music <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link active" to="/covid19">
                COVID-19<span className="badge badge-secondary">New</span> <span className="sr-only">(current)</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;