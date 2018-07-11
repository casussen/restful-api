'use strict';

const functions = requitre('firebase-functions');

exports.dialogflowFirebaseFulfillment =
  functions.https.onRequest((request, response) =>  {
    var chat = "Here is a sample response that should give you a real data point";

    response.setHeader('Content-Type', 'application/json');

    response.send(JSON.stringify({"speech": chat, "displayText": chat}))
  });