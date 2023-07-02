import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </p>
      <p style={{ margin: 0 }}>© 2023 My App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;