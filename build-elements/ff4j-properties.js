const fs = require('fs-extra');
const concat = require('concat');
const del = require('del');

(async function build() {
  const files = [
    './dist/ff4j-properties/runtime-es2015.js',
    './dist/ff4j-properties/polyfills-es2015.js',
    './dist/ff4j-properties/main-es2015.js'
  ];

  await del(['elements/ff4j-properties.js']);
  await fs.ensureDir('elements');
  await concat(files, 'elements/ff4j-properties.js');
}());
