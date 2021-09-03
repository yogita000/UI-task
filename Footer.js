import React from "react";

const Footer = () => {
  return (
    <>
      <div class="fixed-bottom">
        <nav class="navbar navbar-dark navbar-expand bg-dark justify-content-around">
          <div class="container">
            <ul class="navbar-nav nav-justified w-100 text-center mt-1">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-home"></span>

                  <span class="d-none d-sm-inline mt-1">Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-desktop"></span>

                  <span class="d-none d-sm-inline mt-1">Kiosk Processing</span>
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
                  <span class="fa fa-share-square "></span>
                  <span class="d-none d-sm-inline mt-1">Pending Checkout</span>
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
                  <span class="fas fa-clock"></span>
                  <span class="d-none d-sm-inline mt-1">Overdue Visits</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-user-times"></span>
                  <span class="d-none d-sm-inline mt-1">Access Removal</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-address-card"></span>
                  <span class="d-none d-sm-inline mt-1">Cust.name change</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-address-book"></span>
                  <span class="d-none d-sm-inline mt-1">Contact 360</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-users-cog"></span>
                  <span class="d-none d-sm-inline mt-1">Contractor visit</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex flex-column"
                  data-toggle="collapse"
                >
                  <span class="fas fa-calendar-check"></span>
                  <span class="d-none d-sm-inline mt-1">Calender Check</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
