var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloom = require('./Bloom.js');

var pwndBloom = new bloom();
var userBloom = {};



router.post('/passwords/passwordHealth', function(req, res){
    var check = new pcheck();
    if (req.body.password) {
        res.json({ "health" : check.passStr(req.body.password)});
        res.status(200);
    } else {
        res.status(400);
    }
    res.end();
})

router.route('/passwords/pwnd')
    .put(function(req, res){
        if (req.body.password) {
            
        }

    })
    .post(function(req, res){

    })

router.route('/passwords/users/:userName/previous')
    .post(function(req, res){

    })
    .put(function(req, res){
        
    })

module.exports = router;