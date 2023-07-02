import React from 'react';
import '../../css/header.css';
import logo from '../../public/images/SkillBridge-logos_black_h_adjustment.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="container-small">
          <a href="./" className="headA">
            <img src={logo} alt="ロゴ" className="logo" />
          </a>
          <button type="button" className="headC">
            <span className="fa fa-bars" title="MEMU"></span>
            <span className="sr-only">MEMU</span>
          </button>
        </div>
        <nav className="headB">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./">FAQ（サンプル）</a></li>
            {/* 他のリンク */}
            <li className="SNS">
              <a href="https://www.instagram.com/yotamatsumaru/">
                <span className="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;