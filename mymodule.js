const fs = require('fs');
const path = require('path');

module.exports = listFilteredFiles = (dirName, ext, callback) => {
	fs.readdir(dirName, (err, files) => {
		if (err) return callback(err);

		let filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
		callback(null, filteredFiles);
	});
}

// same result as above, but using async/await
/* module.exports = listFilteredFiles = async (dirName, ext) => {
	try {
		const files = await fs.promises.readdir(dirName);
		const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
		return filteredFiles;
	} catch (err) {
		return err;
	}
} */