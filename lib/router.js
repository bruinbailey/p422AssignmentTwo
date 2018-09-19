var express = require('express'),
    router = express.Router(),
    pcheck = require('./pwchecker.js'),
    bloom = require('./Bloom.js');



router.route('/v1/passwords/passwordHealth')
    .post(function(req, res){
        var body = req.body;
        var password = req.params.password;
        data[password] = body;

        res.status(200);
        res.json(data[password]);
    })

module.exports = router;