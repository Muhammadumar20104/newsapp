import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link class="navbar-brand" to="#">
                NewsMonkey
              </Link>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/business">
                  Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/entertainment">
                  Entertainment
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/health">
                  Health
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/science">
                  Science
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/sport">
                  Sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/technology">
                  Technology
                  </Link>
                </li>
              </ul>
              {/* <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
