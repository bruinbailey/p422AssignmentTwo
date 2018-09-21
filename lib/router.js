// imports and sets all needed modules and files
var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloomArray = require('./Bloom.js');

// creating new bloomArray of bloom filter for recording of all seen passwords
pwndBloom = new bloomArray(20000);
// creating empty object to store individual user bloom filter for recording all seen passwords
var userBloom = {};


// route to take post verb and check the strength of password delivered in body of request
router.post('/passwords/passwordHealth', function(req, res){
    var check = new pcheck();   // creates new object for checking password strength
    if (req.body.password) {    // boolean check for if body of request contains password field
        res.json({ "health" : check.passStr(req.body.password)});   // responds with health score of password that is found
        res.status(200);    // respond with status for everything went ok
    } else {
        res.status(400);    // respond with status for bad request if no pass found in body of request
    }
    res.end();      // tell the response to end
})

// route to take put/post verb for bloom filter containing all passwords.
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

// route to take put/post verbs for bloom filter for each individual user
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
        if(req.body.password) {
            var user = req.params.userName,
                pass = req.body.password;
            if (userBloom[user] === undefined) {
                res.json({"seen" : false});
            } else {
                res.json({"seen" : userBloom[user].check(pass)});
                res.status(200);
            }
        } else {
            res.status(400);
        }
        res.end();
    })

module.exports = router;