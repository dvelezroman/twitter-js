var pg = require('pg');
var postgresUrl = 'postgres://postgres:mentaleche2304@localhost:5432/twitterdb'; // postgres://dbusername:passwrod@server:port/database
var client = new pg.Client(postgresUrl);
// conectando al servidor de postgres
client.connect();
// hacer el cliente disponible como un módulo de Node
module.exports = client;
