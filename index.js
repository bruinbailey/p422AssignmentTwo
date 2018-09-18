var express = require('express'),
    app = express(),
    router = require('./lib/router.js'),
    bodyParser = require('body-parser'),
    port = 8080;

app.use(bodyParser.json());

app.use('/v1', router);

app.listen(port, function() {
    console.log("Listening on "+ port)
})