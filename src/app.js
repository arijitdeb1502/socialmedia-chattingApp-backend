const express = require('express')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(__dirname+'/endpoints/userSignup.yaml');
const dbConnection = require('./database/connection');
const userRouter = require('./routers/user');
const app = express();

// db connectivity
dbConnection();

// cors (This is used to tackle cross compatibility issue)
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);

// API Documentation
if (process.env.NODE_ENV != 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = app;