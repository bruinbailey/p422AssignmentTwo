var express = require('express'),
    app = express(),
    router = require('./lib/router.js'),
    bodyParser = require('body-parser'),
    port = 8080;

app.use(bodyParser.json({type: 'application/json'}));

app.use('/v1', router);

app.post('/', function(req, res){
    if (req.body.password) {
        console.log(req.body.password);
        console.table(req.body);
        res.status(204);
    } else {
        res.status(400);
    }
    res.end();
});


app.listen(port, function() {
    console.log("Listening on "+ port)
})