const express = require('express');
const router = express.Router();
// se puede usar solo una linea: const router = require('express').Router();

const tweetBank = require('../tweetBank');
router.get('/', function(req, res){
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
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