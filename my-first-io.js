const fs = require('fs')
const path = process.argv[2];

const content = fs.readFileSync(path, 'utf8');
const numNewLines = content.split('\n').length - 1;
console.log(numNewLines);