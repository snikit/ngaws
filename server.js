"use strict";

var express=require("express");
var app=express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(express.static(__dirname+"/public"));

require('./api.js')(app);

var port=9090;
app.listen(port);




console.log("ngaws backend is up @ "+port);
