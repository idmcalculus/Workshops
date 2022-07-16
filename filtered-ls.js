const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(folder, (err, files) => {
	if (err) {
		return console.log(err);
	}

	for (let file of files) {
		if (path.extname(file) === ext) {
			console.log(file);
		}
	}
})