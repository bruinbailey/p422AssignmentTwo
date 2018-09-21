//imports and sets all needed modules
var express = require('express'),
    app = express(),
    router = require('./lib/router.js'),
    bodyParser = require('body-parser'),
    port = 8080;
//tells express to use bodyParser to handle requests
app.use(bodyParser.json({type: 'application/json'}));
// tells express to send all requests starting with /v1 to the router file
app.use('/v1', router);
// tells express where the static folder for files is.
app.use('/static', express.static('public'));

//opens server to requests on specified port
app.listen(port, function() {
    console.log("Listening on "+ port)
})