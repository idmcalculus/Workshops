const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

// Write an HTTP server that receives only POST requests
// and converts incoming POST body characters to 
// upper-case and returns it to the client

const server = http.createServer((req, res) => {
	if (req.method !== 'POST') {
		return res.end('send me a POST\n');
	}

	req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);


