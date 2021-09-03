import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand bg-dark justify-content-around">
      <div class="container">
        <ul class="navbar-nav nav-justified w-100 text-center mt-1">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fas fa-ban"></span>

              <span class="d-none d-sm-inline mt-1">Space Restrictions</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fas fa-credit-card"></span>

              <span class="d-none d-sm-inline mt-1">Credit Holds</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fas fa-business-time"></span>

              <span class="d-none d-sm-inline mt-1">Visit Log</span>
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fa fa-cog "></span>
              <span class="d-none d-sm-inline mt-1">Help Desk</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fas fa-briefcase"></span>
              <span class="d-none d-sm-inline mt-1">Reports</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link d-flex flex-column"
              data-toggle="collapse"
            >
              <span class="fas fa-bell"></span>
              <span class="d-none d-sm-inline mt-1">Notification</span>
            </a>
          </li>
          <li>
            <form class="form-inline  my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
