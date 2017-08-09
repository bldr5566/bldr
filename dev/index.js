const path = require('path');
const fs = require('fs');

try {
  const babelrc = fs.readFileSync(path.join(__dirname, './../.babelrc'));
  const babelConfig = JSON.parse(babelrc);
  require('babel-register')(babelConfig);

  require('./app.js');
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}
