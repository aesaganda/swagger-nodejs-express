const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://apischool.marun.tk:${port}`);
});

/* Endpoints */
const endpoints = require('./src/endpoints');
endpoints(app);

// mongodb connection
const mongoose = require('mongoose');
// const { ObjectId } = require('mongodb'); // or require ('mongoose');

mongoose.connect('mongodb://mongo:27017/apischool', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));