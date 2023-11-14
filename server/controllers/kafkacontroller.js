const kafkaController = {};

//middleware functions
kafkaController.connectButton = (req, res, next) => {
    //send user to display page
    return next();
}

kafkaController.displayBrokers = (req, res, next) => {
    //displays brokers on display page
    return next();
}

kafkaController.displayTopicsAndPartitions = (req, res, next) => {
    return next();
}

kafkaController.displayProducersAndConsumers = (req, res, next) => {
    return next();
}

kafkaController.displayAlerts = (req, res, next) => {

}


module.exports = kafkaController;