const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

/* 
//No need to use this function anymore since we are using strftime
const zeroFill = (num) => {
	return num < 10 ? '0' + num : num;
}
*/

const now = () => {
	/* const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const adjustMonth = zeroFill(month);
	const adjustDay = zeroFill(day);
	const adjustHours = zeroFill(hours);
	const adjustMinutes = zeroFill(minutes);

	return `${year}-${adjustMonth}-${adjustDay} ${adjustHours}:${adjustMinutes}`; */

	return strftime('%Y-%m-%d %H:%M');
}

const server = net.createServer(socket => {
	socket.end(now() + '\n');
});

server.listen(port);