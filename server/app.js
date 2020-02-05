const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

// middleware:
const path = require('path');
//var proxy = require('http-proxy-middleware');

app.listen(3000, () => console.log('Listening on port 3000!'));

app.use(express.static('public'));



