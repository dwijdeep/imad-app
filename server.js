var express = require('express'); //to create the web server.....listening to the port and handling the connection for the server
var morgan = require('morgan'); //to help us generate output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function (req, res) { 
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/', function (req, res) { 
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) { 
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
