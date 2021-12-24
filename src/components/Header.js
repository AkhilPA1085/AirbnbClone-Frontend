import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    
      <nav className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-black">

          <div class="container">
            <Link class="navbar-brand" to="#">
              <img className="header_img" src={`${process.env.PUBLIC_URL}/Header/header.png`} alt="" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>


          <div className="header_end">
           <div className="header_search">
           <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
           </div>



            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active text-white" aria-current="page" to="/admin">
                    BecomeHost 
                  </Link>
                </li> 
              </ul>
             
            </div>
            </div>


          </div>
        </nav>
      </nav>
      
    
  );
}

export default Header;
