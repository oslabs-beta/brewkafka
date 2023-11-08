const kafkaController = {};

//middleware functions
kafkaController.connectButton = (req, res, next) => {
    //send user to display page
    return next();
}



module.exports = kafkaController;