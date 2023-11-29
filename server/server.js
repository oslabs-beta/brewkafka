const express = require('express');
const bodyParser = require('body-parser');
const { Kafka } = require('kafkajs');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 1234;
const kafkaController = require('./controllers/kafkacontroller.js');
// const kafkaRoutes = require('./routes/kafkaRoutes.js');

app.use(bodyParser.urlencoded());
app.use(express.json());

//get request on connect button
app.get('/connect', kafkaController.connectButton, (req, res) => {
  return res.status(200);
});

// write server config for url of Kafka server
// controller handles the response
app.post('/config', kafkaController.addKafkaServerConfig);

// post req to manually refresh prometheus
app.post('/promReload', async (req, res) => {
  try {
    await fetch('http://prometheus:9090/-/reload', { method: 'POST' });
    res.json({ message: 'Prometheus config reload in backend.' });
  } catch (error) {
    console.error('Error in backend prometheus config reload: ' + error);
    res
      .status(500)
      .json({ message: 'Failed to reload prometheus config in backend.' });
  }
});

// app.get('/brokers', kafkaController.displayBrokers, (req, res) => {
//   return res.status(200);
// })

app.get(
  '/topics-partitions',
  kafkaController.displayTopicsAndPartitions,
  (req, res) => {
    return res.status(200);
  },
);

app.get(
  '/producers-consumers',
  kafkaController.displayProducersAndConsumers,
  (req, res) => {
    return res.status(200);
  },
);

app.get('/alerts', kafkaController.displayAlerts, (req, res) => {
  return res.status(200);
});

//new kafka instance
const kafka = new Kafka({
  brokers: ['localhost:9092'],
});

app.get('/getmessages', async (req, res) => {
  //creating a consumer
  const consumer = kafka.consumer({ groupId: 'test-consumer-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true });

  const messages = [];
  await consumer.run({
    eachMessage: async ({ message }) => {
      messages.push(message.value.toString());
      console.log({
        value: message.value.toString(),
      });
      console.log(messages);
    },
  });
  return res.status(200).json(messages);

  // await consumer.disconnect();
});

//unknown route error
app.use((req, res) => {
  return res.status(404).send('Page not found');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error',
    status: 500,
    message: 'Error caught',
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

module.exports = app;
