const express = require('express');
const app = express(); // crea una instancia de una aplicacion de express

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hola, Mundo...!\n');
}).listen(3000, '127.0.0.1');

app.use(function(req, res, next){

})