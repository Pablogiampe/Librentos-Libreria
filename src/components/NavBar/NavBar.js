import CartWidget from "../CartWidget/index";
import React from "react";
;

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bolder text-dark" aria-current="page" href="src/.html">inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder text-dark" href="src/.html">productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder text-dark" href="src/.html">nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder text-dark" href="src/.html"><cartWidget /></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  );
}


export default NavBar;
