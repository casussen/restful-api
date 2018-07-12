var express = require('express');

var http = require('http');

var app = express();


app.use('/', function(req,res){
	res.json({
{
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
}
});

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });