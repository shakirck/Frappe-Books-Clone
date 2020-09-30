import React from "react";

export default function Footer() {
  return (
    <div className="Footer container">
      <div className="footer-logo logo-text">Booke</div>
      <div className="footer-nav">
        <div className="left-footer-nav">
          <a href="/" className="footer-nav-item">
            COmpany
          </a>
          <a href="/" className="footer-nav-item">
            About
          </a>
          <a href="/" className="footer-nav-item">
            Career
          </a>
          <a href="/" className="footer-nav-item">
            Contact
          </a>
        </div>
        <div className="right-footer-nav">
          <a href="/" className="footer-nav-item">
            <img
              className="footer-social-logo"
              src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
              alt=""
            />
          </a>
          <a href="/" className="footer-nav-item">
            <img
              className="footer-social-logo"
              src="https://www.flaticon.com/svg/static/icons/svg/1409/1409937.svg"
              alt=""
            />
          </a>
          <a href="/" className="footer-nav-item">
            <img
              className="footer-social-logo"
              src="https://www.flaticon.com/svg/static/icons/svg/733/733590.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
