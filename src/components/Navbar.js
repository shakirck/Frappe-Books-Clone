import React from "react";

export default function Navbar() {
  return (
    <nav className="Navbar container">
      <div className="logo-wrapper">
        <div className="logo-text">Booke</div>
      </div>
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Docs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Github
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
