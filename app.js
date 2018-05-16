const express = require('express');
const app = express(); // crea una instancia de una aplicacion de express
const nunjucks = require('nunjucks');

app.get('/', function(req, res){
	const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	//res.send('Hola');
});
app.listen(3000);

app.use('/', function(req, res, next ){
	console.log('Hicieron un Request a '+ req.url);
	next();
});

app.use('/especial/subpath', function(req, res, next){
	console.log('Haz llegado a un area especial...');
	next();
});

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });


