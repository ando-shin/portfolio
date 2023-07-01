import React from 'react';
import '../../css/TopScreen.css';
import logo from '../path/to/logo.png';

const TopScreen = () => {
  return (
    <div className="top-screen">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        <h1>サイトのタイトル</h1>
        <p>サイトの説明や情報をここに記述します。</p>
      </div>
    </div>
  );
}

export default TopScreen;