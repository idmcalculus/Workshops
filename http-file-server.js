const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer(function (req, res) {
	res.on('error', err => console.log(err));
	res.writeHead(200, { 'content-type': 'text/plain' });
	fs.createReadStream(file).pipe(res);
});
server.listen(port);