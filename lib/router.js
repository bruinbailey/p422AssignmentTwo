var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloom = require('./Bloom.js'),
    bodyParser = require('body-parser');



router.post('/v1/passwords/passwordHealth', function(req, res){
    if (req.body.password) {
		console.log(req.body.password);
		console.table(req.body);
		res.status(204);
	} else {
		res.status(400);
	}
	res.end();
})

router.route('/v1/passwords/pwnd')
    .put(function(req, res){

    })
    .post(function(req, res){

    })

router.route('/v1/passwords/users/:userName/previous')
    .post(function(req, res){

    })
    .put(function(req, res){
        
    })

module.exports = router;