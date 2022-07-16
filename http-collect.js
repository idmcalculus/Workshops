const http = require('http');
const concat = require('concat-stream');
const bl = require('bl');
const url = process.argv[2];
const dataArr = [];

http.get(url, res => {
	res.setEncoding('utf8');
	res.on('error', err => console.error(err));
	/* res.on('data', data => {
		dataArr.push(data);
	});
	res.on('end', () => {
		console.log(dataArr);
		console.log(dataArr.join('').length);
		console.log(dataArr.join(' '));
	}); */
	/* res.pipe(concat(data => {
		console.log(data.length);
		console.log(data);
	})); */
	res.pipe(bl((err, data) => {
		if (err) {
			console.error(err);
		} else {
			console.log(data.length);
			console.log(data.toString());
		}
	}));
}).on('error', err => console.error(err));