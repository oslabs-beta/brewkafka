const express = require('express');
const path = require('path');
const app = express();

const PORT = 1234
app.use(bodyParser.urlencoded());
app.use(express.json());



app.listen(PORT, `Listening on Port ${PORT}`);