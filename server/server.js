const express = require('express');
const path = require('path');
const app = express();
const PORT = 1234;
const kafkaController = require('./controllers/kafkacontroller.js');

app.use(bodyParser.urlencoded());
app.use(express.json());

//get request on connect button
app.get('/connect', kafkaController.connectButton, (req, res) => {
    res.status(200);
});


//unknown route error
app.use((err, req, res, next) => {
    res.status(404).send('Page not found');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error',
    status: 500,
    message: 'Error caught'
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

module.exports = app;