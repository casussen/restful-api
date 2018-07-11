'use strict';

var https = require('https');

const functions = require('firebase-functions'); // Cloud Functions for Firebase library

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) =>  {
    const action = request.body.result.action;
    
    response.setHeader('Content-Type', 'application/json');

    if (action != 'account.balance.check') {
        response.send(buildChatResponse("I'm sorry, I don't know this"))
        
        return;
    }
    
    const parameters = request.body.result.parameters;
    
    var account = parameters['account'];
    var name = parameters['name']

    accountBalance(account, name);
});



function accountBalance(account, name) {
    console.log('In function accountBalance');

    console.log("Account: " + account);
    console.log("name: " + name);


    console.log('Path string: ' + pathString);
  


  var request = https.get({
    host: "https://restful-api-7778.herokuapp.com/",
    path: pathString,
  }, function(response) {
    var json = "";
    response.on('data', function(chunk) {
        console.log("Received json response: " + chunk);
        json += chunk;
    });

    response.on('end', function() {
        var jsonData = JSON.parse(json);
        var balance = jsonData.data[0].value;

        console.log("The "+account+" for "+ name+ "is: " + balance);

        var chat = "The "+account+" for "+ name+ "is: " + balance;

        cloudFnResponse.send(buildChatResponse(chat));
    });
  });
}

function buildChatResponse(chat) {
    return JSON.stringify({ "speech": chat, "displayText": chat});
}










