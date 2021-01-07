import "./header.css";
import React, { useState } from "react";
function Header() {
  const [sidebar_var, setsidebar_var] = useState({ class: "", marginLeft: "250px" });

  const onclickHandler = () => {
    setsidebar_var({ class: sidebar_var.class ? "" : "active", marginLeft: sidebar_var.class ? "250px" : "0px" });
  };

  return (
    <>
      <div style={{ position: "absolute", marginLeft: sidebar_var.marginLeft, zIndex: 10, transition: "all 0.3s" }}>
        <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={onclickHandler}>
          <i class="fa fa-align-left"></i>
        </button>
      </div>
      <nav id="sidebar" className={sidebar_var.class}>
        <div className="sidebar-header">
          <h3>#logo</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#">
              <i className="fa fa-dashboard"></i>&nbsp;Dashboard
            </a>
          </li>
        </ul>
        <ul className="list-unstyled components">
          <li>
            <a href="#">
              <i className="fa fa-book"></i>&nbsp;Insurance
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-home"></i>&nbsp;Loans
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user"></i>&nbsp; Contacts
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-database"></i>&nbsp;Transactions
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user"></i>&nbsp;Warranties
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-comments-o"></i>&nbsp;Home Chat
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-file"></i>&nbsp;Reports
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-share-alt"></i>&nbsp;Share Property
            </a>
          </li>
        </ul>

        <ul class="list-unstyled components">
          <li>
            <a href="#">
              <i class="fa fa-book"></i>&nbsp;Documents
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-image"></i>&nbsp;Gallery
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-link"></i>&nbsp;Links
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-bell"></i>&nbsp;Reminders
            </a>
          </li>
        </ul>
        <ul class="list-unstyled components">
          <li>
            <a href="#">
              <i class="fa fa-book"></i>&nbsp;Leases
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
