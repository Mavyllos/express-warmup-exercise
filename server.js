const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');
const app = express();
let port = process.env.PORT || 3000;


app.listen(port, listen);
app.use(bodyParser.json())
app.get('/', strResp);
app.post('/', strCreate);


function listen(){
  console.log(`Listening on ${port}`);
}

function strResp (req, res) {
  res.send("Hello!");
}

function strCreate(req, res) {
  var phrase = req.body.phrase.toUpperCase().slice(3, 12);
  res.send(phrase);
}
