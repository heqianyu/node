// first_server.js
const http = require('http');
const url = require('url');
const server = http.createServer();

server.listen(8888);

let users = [];

server.on('request',(req,res) => {
	const parsedurl = url.parse(req.url,true);
	switch (req.method) {
		// case 'GET':
		//   if (parsedurl.path.indexOf('/user') > -1) {
		//   	let username = parsedurl.path.substring(6,parseurl.path.length);
		//   	res.end("hello,world!");
		//   }
		//   break;
		case 'POST':
		  let user = '';
		  req.on('data',(buffer) => {
		  	const userstr = buffer.toString();
		  	let ct = req.headers['content-type'];
		  	if(ct === 'application/json') {
		  		user = JSON.parse(userstr);
		  		users.push(user);
		  	}
		  })
		  console.log('m');
		  req.on('end', () => {
		  	res.statusCode = 201;
		  	res.end(JSON.stringify(users));
		  })
		  break;
	}
})