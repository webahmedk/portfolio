import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ddd', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Khalid Ahmed. All rights reserved.</p>
      <div>
        <a href="https://linkedin.com/in/khalid" style={{ margin: '0 0.5rem' }}>LinkedIn</a>
        <a href="https://github.com/khalid" style={{ margin: '0 0.5rem' }}>GitHub</a>
        {/* Add other links if needed */}
      </div>
    </footer>
  );
}

export default Footer;