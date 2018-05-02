import React, { Component } from "react";
//import "./nav.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="/" className="navbar-brand">
                Welcome Bar
              </a>
            </div>
              <div />
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
