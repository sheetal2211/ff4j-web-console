const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ff4j-features/runtime-es5.js',
    './dist/ff4j-features/polyfills-es5.js',
    './dist/ff4j-features/main-es5.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ff4j-features.js');
  await fs.copyFile(
    './dist/ff4j-features/styles.css',
    'elements/ff4j-features.styles.css'
  );
})();
