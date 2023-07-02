import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../public/images/SkillBridge-logos_black_h_adjustment.png';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="container-small">
          <Link to="/" className={`headA ${location.pathname === '/' ? 'active' : ''}`}>
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
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>LOGIN</Link>
            </li>
            <li>
              <Link to="/todo" className={location.pathname === '/todo' ? 'active' : ''}>TODO</Link>
            </li>
            <li>
              <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
