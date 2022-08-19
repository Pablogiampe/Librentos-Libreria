import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";


  function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light nav">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink class="nav-link fw-bolder text-dark" to="/">inicio</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link fw-bolder text-dark" to="/category">categorias</NavLink>
          </li>
          <li class="nav-item">
          
            <NavLink class="nav-link fw-bolder text-dark" to="/cart"><CartWidget /></NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    );
  }
  
  
  export default NavBar;
