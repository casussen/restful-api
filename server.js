var express = require('express');

var app = express();

app.use('/', function(req,res){
	res.send('Welcome to my API!');
});

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });