var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Hello world');
});

app.get('*', function(req, res) {
    res.send('Error 404');
  });
  
app.listen(8080, () => console.log('Listening on port 8080.'));
