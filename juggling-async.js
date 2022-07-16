const http = require('http');
const concat = require('concat-stream');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
let completed_requests = 0;
const responses = [];

urls.forEach((url, index) => {
	http.get(url, response => {
		response.setEncoding('utf8');
		response.pipe(concat(data => {
			responses[index] = data;
			completed_requests++;

			if (completed_requests === urls.length) {
				responses.forEach(response => console.log(response));
			}
		}));
	}).on('error', (error) => {
		console.log(error);
	});
});

// Alternative solution:

/* const bl = require('bl')
const results = []
let count = 0

function printResults () {
	for (let i = 0; i < 3; i++) {
	console.log(results[i])
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
		return console.error(err)
		}

		results[index] = data.toString()
		count++

		if (count === 3) {
		printResults()
		}
	}))
	})
}

for (let i = 0; i < 3; i++) {
	httpGet(i)
} */


