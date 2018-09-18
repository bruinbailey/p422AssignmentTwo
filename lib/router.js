var express = require('express'),
    router = express.Router();

router.route('/v1/passwords/passwordHealth')
    .get(function(req, res){
        var password = req.params.password;
        res.status(200);
        res.json(password);
    })

module.exports = router;