const express = require('express');
const bodyParser = require('body-parser');
const { Kafka } = require('kafkajs')
const path = require('path');
const app = express();
const PORT = 1234;
const kafkaController = require('./controllers/kafkacontroller.js');

app.use(bodyParser.urlencoded());
app.use(express.json());

//get request on connect button
app.get('/connect', kafkaController.connectButton, (req, res) => {
  return res.status(200);
});

// app.get('/brokers', kafkaController.displayBrokers, (req, res) => {
//   return res.status(200);
// })

app.get('/topics-partitions', kafkaController.displayTopicsAndPartitions, (req, res) => {
  res.status(200);
})

app.get('/producers-consumers', kafkaController.displayProducersAndConsumers, (req, res) => {
  res.status(200);
})

app.get('/alerts', kafkaController.displayAlerts, (req, res) => {
  return res.status(200);
})

//new kafka instance
const kafka = new Kafka({
  brokers: ['localhost:9092']
});


app.get('/getmessages', async (req, res) => {
  //creating a producer
  // const producer = kafka.producer();
  
  
  // await producer.connect();
  // await producer.send({
  //   topic: 'testing-topic',
  //   messages: [
  //     { value: 'It works!!', partition: 0 },
  //   ],
  // })
  
  //creating a consumer
  const consumer = kafka.consumer({ groupId: 'test-consumer-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'test-events', fromBeginning: true });


  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log('MESSAGE: ', {
  //       value: message.value.toString(),
  //     })
  //   },
  // })


  const messages = [];
  await consumer.run({
    eachMessage: async ({ message }) => {
      messages.push(message.value.toString());
      console.log({
        value: message.value.toString(),
      }) 
      console.log(messages);
    }
  }) 

  // console.log(messages)
  await res.json(messages);
})

//unknown route error
app.use((req, res) => {
   return res.status(404).send('Page not found');
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