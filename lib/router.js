var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloomArray = require('./Bloom.js');

pwndBloom = new bloomArray(20000);
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
            res.status(204);
        }

    })
    .post(function(req, res){

    })

router.route('/passwords/users/:userName/previous')
    .put(function(req, res){

    })
    .post(function(req, res){
        
    })

module.exports = router;