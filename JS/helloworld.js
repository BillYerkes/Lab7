var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello world, This my Lab 7!");
});

app.listen(3000);
