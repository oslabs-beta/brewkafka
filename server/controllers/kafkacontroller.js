const { exec } = require('child_process');
const prometheusConfigWriter = require('../services/prometheusConfigWriter');

const kafkaController = {};

//middleware functions
kafkaController.connectButton = (req, res, next) => {
  //send user to display page
  return next();
};

kafkaController.displayBrokers = (req, res, next) => {
  //displays brokers on display page
  return next();
};

kafkaController.displayTopicsAndPartitions = (req, res, next) => {
  return next();
};

kafkaController.displayProducersAndConsumers = (req, res, next) => {
  return next();
};

// config writer for kafka server
// server/controllers/kafkaController.js
kafkaController.addKafkaServerConfig = async (req, res) => {
  try {
    console.log('writing server config for kafka');
    const { serverUrl } = req.body;
    await prometheusConfigWriter.writeConfig(serverUrl);
    console.log('Config file written, now reloading Prometheus');

    // Replace the Docker exec commands with a call to the reload endpoint
    // await KafkaService.reloadPrometheusConfig();
    console.log('Prometheus reloaded');

    res.status(200).json({
      message:
        'Kafka server config successfully updated and Prometheus reloaded.',
    });
  } catch (error) {
    console.error('Error updating Kafka server config: ', error);
    res.status(500).json({ error: error.message });
  }
};

kafkaController.displayAlerts = (req, res, next) => {};

// kafkaController.addKafkaServerConfig = (req, res, next) => {
//   try {
//     prometheusConfigWriter.writeConfig(req.body.serverUrl);
//     res
//       .status(200)
//       .json({ message: 'Kafka server config updated successfully.' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = kafkaController;
