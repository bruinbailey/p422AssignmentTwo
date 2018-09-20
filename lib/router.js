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
            pwndBloom.record(req.body.password);
            res.status(204);
        } else {
            res.status(400);
        }
        res.end();
    })
    .post(function(req, res){
        if (req.body.password){
            res.json({ "seen" : pwndBloom.check(req.body.password)})
            res.status(200);
        } else {
            res.status(400);
        }
        res.end();
    })

router.route('/passwords/users/:userName/previous')
    .put(function(req, res){
        if (req.body.password) {
            var user = req.params.userName,
                pass = req.body.password;
            if (userBloom[user] !== undefined) {
                userBloom[user].record(pass);
                res.status(204);
            } else {
                userBloom[user] = new bloomArray(20000);
                userBloom[user].record(pass);
                res.status(204);
            }
        } else {
            res.status(400);
        }
        res.end();
    })
    .post(function(req, res){
        
    })

module.exports = router;