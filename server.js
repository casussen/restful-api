var express = require('express');

var http = require('http');

var app = express();

app.use('/', function(req,res){
	res.json({
	"user_1": {
		"name": "John",
		"checking": {
			"balance": "$37,043.31"
		}
	},


	"user_2": {
		"name": "Mary",
		"checking": {
			"balance": "$11,543.45"
		}
	},

	"user_3": {
		"name": "Susan",
		"checking": {
			"balance": "$72,436,851.84"
		}
	},

	"user_4": {
		"name": "Josh",
		"checking": {
			"balance": "$0.01"
		}
	},

	"user_5": {
		"name": "Michael",
		"checking": {
			"balance": "$80,432.45"
		}
	}
});
});

app.listen(8000, function(){
	console.log('Listening on port 8000');
});
