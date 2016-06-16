const express = require('express');
const app = express();
const port = 3030;
const config = require('./middleware.js');

// configures our server to run with our middleware and routes
config(app, express);

app.listen(port);
console.log('Listening on: ', port);
