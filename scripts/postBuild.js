const path = require('path');
const fs = require('fs');
const json = require('../package.json');

function preBuild() {
  const whitelist = [
    'name',
    'author',
    'description',
    'license',
    'repository',
    'version',
    'main',
    'module',
    'types',
    'dependencies',
  ];
  const filteredPackage = Object.keys(json).reduce((acc, key) => {
    if (whitelist.includes(key)) acc[key] = json[key];
    return acc;
  }, {});
  const distPackage = JSON.stringify(filteredPackage, null, 2);
  fs.writeFileSync(path.join(__dirname, '..', 'dist', 'package.json'), distPackage);
}

preBuild();
