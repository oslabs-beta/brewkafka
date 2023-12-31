const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Kafka } = require('kafkajs');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 1234;
const kafkaController = require('./controllers/kafkacontroller.js');
// const kafkaRoutes = require('./routes/kafkaRoutes.js');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//post request on connect button
app.post('/connect', kafkaController.connectButton, (req, res) => {
  console.log('in connect post request handler')
  return res.status(200);
}); 

// write server config for url of Kafka server
// controller handles the response
app.post('/config', kafkaController.addKafkaServerConfig);
// app.post('/config', (req, res) => {
//   console.log(req.body);
//   return kafkaController.addKafkaServerConfig;
// });

app.use('/brokers', (req, res) => {
  return res.redirect('/brokers');
})

app.get('/topics-partitions', kafkaController.displayTopicsAndPartitions, (req, res) => {
  return res.status(200);
})

app.get('/producers-consumers', kafkaController.displayProducersAndConsumers, (req, res) => {
  return res.status(200);
})

app.get('/alerts', kafkaController.displayAlerts, (req, res) => {
  return res.status(200);
})

//new kafka instance
// const kafka = new Kafka({
//   brokers: ['localhost:9092']
// });


// app.get('/getmessages', async (req, res) => {
//   //creating a producer
//   const producer = kafka.producer();
  
  
//   await producer.connect();
//   await producer.send({
//     topic: 'new-topic',
//     messages: [
//       { value: 'MESSSAGGEEEEEEEEE', partition: 0 },
//     ],
//   })
  
//   // creating a consumer
//   // const consumer = kafka.consumer({ groupId: 'new-consumer-group' });
//   const consumer = kafka.consumer({ groupId: 'test-consumer-group' });

//   await consumer.connect();
//   await consumer.subscribe({ topic: 'new-topic', fromBeginning: true });

//   const messages = [];
//   await consumer.run({
//     eachMessage: async ({ message }) => {
//       messages.push(message.value.toString());
//       console.log({
//         value: message.value.toString(),
//       }) 
//       console.log(messages);
//     }
//   }) 
//   res.status(200).json(messages);
//   // res.json(messages);
// })
  
// try {
//   const consumer = kafka.consumer({ groupId: 'test-consumer-group' });

//   await consumer.connect();
//   await consumer.subscribe({ topic: 'testing-topic', fromBeginning: true });

//   const messages = [];
//   await consumer.run({
//     eachMessage: async ({ message }) => {
//       messages.push(message.value.toString());
//       console.log({
//         value: message.value.toString(),
//       }) 
//       console.log(messages);
//     }
//   })
//   res.locals.messages = messages;
//   res.status(200).json(res.locals.messages);
// }
// catch (err) {
//   console.error(err, 'Error in kafka consumer function');
// }

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
