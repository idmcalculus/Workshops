const filteredFiles = require('./mymodule.js');
const folder = process.argv[2];
const ext = process.argv[3];

const callback = (err, files) => {
	if (err) {
		return console.log(err);
	}

	for (const file of files) {
		console.log(file);
	}
}

filteredFiles(folder, ext, callback);