const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

const parseTime = time => {
	return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

const unixTime = time => {
	return {
		unixtime: time.getTime()
	};
}

http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const time = parsedUrl.query.iso;
	const date = new Date(time);

	let result;

	if (parsedUrl.pathname === '/api/parsetime') {
		result = parseTime(date);
	} else if (parsedUrl.pathname === '/api/unixtime') {
		result = unixTime(date);
	}

	if (result) {
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
}).listen(port);
