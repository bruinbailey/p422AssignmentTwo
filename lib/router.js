var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloom = require('./Bloom.js');



router.post('/v1/passwords/passwordHealth', function(req, res){

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