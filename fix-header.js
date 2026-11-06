const fs = require('fs');
const p = 'C:\\Users\\wisdom\\OneDrive\\Desktop\\usman-hvac-tech\\styles.css';
const chunk = `

/* === Header Visibility Fix === */
.site-header {
  background: rgba(20, 22, 26, 0.95) !important;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line-dark) !important;
}
.site-header.is-stuck {
  background: rgba(20, 22, 26, 0.98) !important;
  box-shadow: 0 14px 40px -20px rgba(0, 0, 0, 0.6);
}
`;
fs.appendFileSync(p, chunk, 'utf8');
console.log('Header visibility fix appended to styles.css');