import React from 'react';
import '../../css/TopScreen.css';
import logo from '../../public/images/SkillBridge-logos_transparent.png';

const TopScreen = () => {
  return (
    <div className="top-screen">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right">
        <h1>Empowering Your Professional Skill Development</h1>
        <p>At our site, we provide high-quality content on a wide range of topics to support your skill development journey. </p>
        <p>Whether you're interested in programming, design, marketing, or business, we offer valuable information and guides </p>
        <p>to help you enhance your skills. Our carefully curated content from reliable sources aims to support your growth and </p>
        <p>success. Let's learn together and elevate your skills.</p>
      </div>
    </div>
  );
}

export default TopScreen;