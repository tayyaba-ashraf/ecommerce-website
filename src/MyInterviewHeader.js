// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header section fixed">
      <div className="container" style={{ maxWidth: '1054px' }}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3 ">
            <button className="menu-btn" type="button">
              <span className="sr-only">Menu</span>
            </button>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 text-center site-logo">
            <a href="https://myinterviewpractice.com/">
              <img
                className="dark-logo"
                src="https://myinterviewpractice.com/images/mipLogoNew.svg"
                alt="myinterviewpractice.com"
              />
            </a>
            <a href="https://myinterviewpractice.com/">
              <img
                className="white-logo"
                src="https://myinterviewpractice.com/images/mipLogoNewWhite.svg"
                alt="myinterviewpractice.com"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3 text-right m-hide">
            <div className="header-btn clearfix">
              <button className="log" data-toggle="modal" data-target="#signin-pop">
                log in
              </button>
              <a href="https://myinterviewpractice.com/register-one/" className="signup-btn">
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
