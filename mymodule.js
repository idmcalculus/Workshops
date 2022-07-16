const fs = require('fs');
const path = require('path');

module.exports = listFilteredFiles = (dirName, ext, callback) => {
	fs.readdir(dirName, (err, files) => {
		if (err) return callback(err);

		let filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
		callback(null, filteredFiles);
	});
}