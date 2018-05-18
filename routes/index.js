const express = require('express');
const router = express.Router();
// se puede usar solo una linea: const router = require('express').Router();

const tweetBank = require('../tweetBank');

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	var list = tweetBank.find({name: name});
	if (list.length === 0) {
		res.send('ERROR...usuario '+ name + ' no existe.!');
	}else{
		res.render('index', {name: name, tweets: list, showForm: true});
	}
});

router.get('/tweet/:id', function(req, res){
	var id = req.params.id;
	var list = tweetBank.find({id: id});
	if (list.length === 0) {
		res.send('ERROR...tweet '+ id + ' no existe.!');
	}else{
		//console.log(list);
		res.render('index', {tweets: list});
	}
});

router.post('/tweets/add'.bodyParser.urlencoded({ extended: true }), function(req, res) {
    var name = req.body.name;
    var content = req.body.text;
    tweetBank.add(name, content);
    res.redirect('/');
});

router.get('/', function(req, res){
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets, showForm: true});
});

router.use(express.static('public'));

// router.use('/', function(req, res, next){
// 	var fs = require('fs');
// 	console.log('archivo a buscar:', './public'+req.url)
// 	fs.readFile('./public'+req.url, 'utf-8', (err, data) => {
// 	  if(err) {
// 	  	console.log('No lo encontre: ', req.url);
// 	    next();
// 	  } else {
// 	  	console.log('Lo encontre:', req.url);
// 	  	console.log('data:', data)
// 	  	res.send(data);
// 	  }
// 	})
// })
module.exports = router;