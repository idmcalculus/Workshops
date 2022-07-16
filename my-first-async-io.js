const fs = require('fs');

const path = process.argv[2];
fs.readFile(path, 'utf8', (err, data) => {
	if (err) {
		return console.log(err);
	}
	const numNewLines = data.split('\n').length - 1;
	console.log(numNewLines);
})