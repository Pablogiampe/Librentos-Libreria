import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";


  function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light nav">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link fw-bolder text-dark" to="/">inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-bolder text-dark" to="/category">categorias</NavLink>
          </li>
          <li className="nav-item">
          
            <NavLink className="nav-link fw-bolder text-dark" to="/cart"><CartWidget /></NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    );
  }
  
  
  export default NavBar;
