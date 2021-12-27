const CSP_CONFIG = {
  'default-src': [`'self'`],
  'connect-src': [`'self'`, 'www.google.com', 'api.coingecko.com'],
  'img-src': [`'self'`, 'blob:', 'data:', 'https:'],
  'object-src': ['blob:'],
  'frame-src': [`'self'`, 'www.facebook.com', 'www.google.com'],
  'frame-ancestors': [`'self'`, 'www.facebook.com'],
  'style-src': [`'self'`, `'unsafe-inline'`, 'fonts.googleapis.com'],
  'font-src': [`'self'`, 'fonts.gstatic.com', 'data:'],
  'script-src': [
    `'self'`,
    `'unsafe-inline'`,
    `'unsafe-eval'`,
    'www.google.com',
    'www.gstatic.com',
    'connect.facebook.net',
  ],
};

const CSP_STRING = Object.entries(CSP_CONFIG)
  .map(([key, value]) => `${key} ${value.join(' ')}`)
  .join('; ');

module.exports = {
  CSP_CONFIG,
  CSP_STRING,
};
