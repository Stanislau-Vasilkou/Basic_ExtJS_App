const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const delay = require('express-delay');
const controllers = require('./controllers.js');


// app.use(delay(2000));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.get('/users', controllers.getUsers);
app.post('/users', controllers.updateUsers);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});