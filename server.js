var express = require('express');
var compression = require('compression');
var httpProxy = require('http-proxy');
var PORT = 3000;

// Initialize
var app = express();

// Serve static resources from 'build' folder
app.use(express.static('build'));

// Enable gzip response compression
app.use(compression());

// Otherwise serve index.html
app.get('*', function (req, res) {
  res.sendfile("/build/index.html");
});

app.listen(PORT);

console.log('Running on port ' + PORT);