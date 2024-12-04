const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<h1>welcome to Oauth page </h1>`);
});

app.listen(port, () => {
  console.log('Server is running on the port number is: ', port);
});
