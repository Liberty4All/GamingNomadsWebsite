var http = require('http');
var fs = require('fs');
var url = require('url');
var httpServer = require('http-server')
var path = require("path");

var root =  path.join(__dirname,"..");
console.log(root);
var port = 9000;
// Create a server
var server = httpServer.createServer({
    root: root,
    robots: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  });
  server.listen(port);
   
// Console will print the message
console.log('Server running at http://127.0.0.1:' + port + '/');