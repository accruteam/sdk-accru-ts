const package = require('./package.json');
const fs = require ('fs');

function preBuild () {
  const tmpPackage = package;
  delete tmpPackage.scripts
  delete tmpPackage.devDependencies;
  const newPackageJson = JSON.stringify(tmpPackage);
  fs.writeFileSync('dist/package.json', newPackageJson);
}

preBuild()