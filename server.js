var express = require('express');

var app = express();

app.use('/', function(req,res){
	res.send({
	"John": {
		"checking": {
			"balance": "$37,043.31"
		}
	},


	"Mary": {
		"checking": {
			"balance": "$11,543.45"
		}
	},

	"Susan": {
		"name": "Susan",
		"checking": {
			"balance": "$72,436,851.84"
		}
	},

	"Josh": {
		"checking": {
			"balance": "$0.01"
		}
	},

	"Michael": {
		"checking": {
			"balance": "$80,432.45"
		}
	}
});
});

app.listen(8000, function(){
	console.log('Listening on port 8000');
});
