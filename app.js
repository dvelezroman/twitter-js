const express = require('express');
const app = express(); // crea una instancia de una aplicacion de express
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use('/', routes);








// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };

// var myLogger = function (req, res, next) {
//   console.log('LOGGED');
//   next();
// };

// app.use(myLogger);
// app.use(requestTime);

// app.get('/', function (req, res, next) {
//   var responseText = 'Hello World!';
//   responseText += 'Requested at: ' + req.requestTime + '';
//   //res.send(responseText);
//   console.log(responseText);
//   next();
// });



// app.get('/', function(req, res){
// 	res.send('Segundo app.get()');
// })

// app.get('/halloffame', function(req, res){
// 	const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// });
// // GET method route
// app.use('/', function(req, res, next ){
// 	console.log('Hicieron un Request a '+ req.url);
// 	next();
// });

// app.post('/', function (req, res, next) {
//   	console.log('POST request to the homepage');
//   	next();
// });

// app.all('/secret', function (req, res, next) {
//   	console.log('Accessing the secret section ...');
//   	next(); // pass control to the next handler
// });

// app.use('/especial/subpath', function(req, res, next){
// 	console.log('Haz llegado a un area especial...');
	
// });

app.listen(3000);