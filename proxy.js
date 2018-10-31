const http = require('http');
const proxy = require('node-http-proxy');


const server = http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://localhost:3111/' });
});


server.listen(3111);
console.log("Listening on 3111");