const express = require('express')
const cors = require('cors');
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

module.exports = app;