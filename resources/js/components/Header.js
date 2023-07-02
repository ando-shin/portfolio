import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../public/images/SkillBridge-logos_black_h_adjustment.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="container-small">
          <Link to="/" className="headA">
            <img src={logo} alt="ロゴ" className="logo" />
          </Link>
          <button type="button" className="headC">
            <span className="fa fa-bars" title="MEMU"></span>
            <span className="sr-only">MEMU</span>
          </button>
        </div>
        <nav className="headB">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/todo">TODO</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
