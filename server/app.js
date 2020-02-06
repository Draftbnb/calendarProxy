const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

// middleware:
const path = require('path');
const url = require("url");
const axios = require('axios');
//var proxy = require('http-proxy-middleware');

// Calendar Service
app.get('/month', (req, res) => {
  axios.get('http://localhost:3001/month', {
    params: req.query
  })
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Image Carousel
app.get('/gallery/:id', (req, res) => {
  var id = req.query.id;
  axios.get(`http://localhost:3004/gallery/${id}`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Reviews
app.get('/api/0', (req, res) => {
  axios.get(`http://localhost:3003/api/0`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// Recommendations
app.get('/listings', (req, res) => {
  axios.get(`http://localhost:3002/listings`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  });
});




app.listen(3004, () => console.log('Listening on port 3004!'));
app.use(express.static('public'));



