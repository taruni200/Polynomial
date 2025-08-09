const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const a = data.a;
const b = data.b;

const decodedRoots = data.roots.map(r => ({
  x: r.x,
  y: parseInt(r.y, r.base)
}));

const firstRoot = decodedRoots[0];
const c = firstRoot.y - (a * Math.pow(firstRoot.x, 2) + b * firstRoot.x);

console.log('Decoded Roots:', decodedRoots);
console.log('Secret c:', c);