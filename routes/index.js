const express = require('express');
const router = express.Router();
// se puede usar solo una linea: const router = require('express').Router();
const client = require('../db');
const tweetBank = require('../tweetBank');

router.get('/users/:name', function(req, res){
	client.query('SELECT users.id AS user_id, tweets.id AS tweet_id, users.name AS name, users.picture_url AS picture_url, tweets.content AS content FROM users INNER JOIN tweets ON users.id = tweets.user_id WHERE users.name=$1', [req.params.name], function (err, result) {
		if (err) return next(err);
		var tweets = result.rows;
		res.render('index', { title: 'Twitter.js', tweet_id: tweets[0].tweet_id, user_id: tweets[0].user_id, name: tweets[0].name, picture_url: tweets[0].picture_url, index: false, tweets: tweets, showForm: true });
	});
	// var name = req.params.name;
	// var list = tweetBank.find({name: name});
	// if (list.length === 0) {
	// 	res.send('ERROR...usuario '+ name + ' no existe.!');
	// }else{
	// 	res.render('index', {name: name, tweets: list, showForm: true});
	// }
});

router.get('/tweet/:id', function(req, res){
	client.query('SELECT users.id AS user_id, tweets.id AS tweet_id, users.name AS name, users.picture_url AS picture_url, tweets.content AS content FROM users INNER JOIN tweets ON users.id = tweets.user_id WHERE tweets.id=$1', [req.params.id], function (err, result) {
		if (err) return next(err);
		var tweets = result.rows;
		res.render('index', { title: 'Twitter.js', tweet_id: tweets[0].tweet_id, user_id: tweets[0].user_id, name: tweets[0].name, picture_url: tweets[0].picture_url, index: false, tweets: tweets, showForm: true });
	});
	// var list = tweetBank.find({id: id});
	// if (list.length === 0) {
	// 	res.send('ERROR...tweet '+ id + ' no existe.!');
	// }else{
	// 	//console.log(list);
	// 	res.render('index', {tweets: list});
	// }
});
router.get('/tweets/remove/:id', function(req, res) {
	client.query('DELETE FROM tweets WHERE id=$1', [req.params.id], function (err, result) {
		if (err) return next(err);
		res.redirect('/');
	});
		//var name = req.body.name;
    //var content = req.body.text;
    //tweetBank.add(name, content);

});

router.post('/tweets/add', function(req, res) {
	client.query('INSERT INTO tweets (user_id, content) VALUES ($1, $2)', [req.body.id, req.body.text], function (err, result) {
		if (err) return next(err);
		res.redirect('/');
	});
		//var name = req.body.name;
    //var content = req.body.text;
    //tweetBank.add(name, content);

});

router.get('/', function(req, res){
	//let tweets = tweetBank.list();
	//res.render('index', {tweets: tweets, showForm: true});
	client.query('SELECT tweets.id AS tweet_id, users.name AS name, users.picture_url AS picture_url, tweets.content AS content FROM tweets INNER JOIN users ON tweets.user_id = users.id', function (err, result) {
	  if (err) return next(err); // pasa el error a Express
	  var tweets = result.rows;
	  res.render('index', { title: 'Twitter.js', tweets: tweets, index: true});
	});
});

router.use(express.static('public'));

module.exports = router;
