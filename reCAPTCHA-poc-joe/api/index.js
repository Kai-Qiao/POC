var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const API = require('./api.re-capptcha');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post("/api/v3/recaptcha", function(req, res) {
    API.sendRequestToGoogle(req, res);
});

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});