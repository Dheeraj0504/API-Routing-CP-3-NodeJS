const express = require('express');
const app = express();

app.get('/', (request, response) => {
  const result= response.send('Home Page');
});

app.get('/about', (request, response) => {
  response.send('About Page');
});

module.exports = app;
