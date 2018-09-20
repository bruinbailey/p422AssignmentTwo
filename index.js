var express = require('express'),
    app = express(),
    router = require('./lib/router.js'),
    bodyParser = require('body-parser'),
    port = 8080;

app.use(bodyParser.json({type: 'application/json'}));

app.use('/v1', router);

app.use('/static', express.static('public'));


app.listen(port, function() {
    console.log("Listening on "+ port)
})