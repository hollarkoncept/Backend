const express = require ('express');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/connectDb');

const app = express(); // initiate the process

dotenv.config({path: ".env"});

app.use(express.json()); //Body parser

app.use(express.json);

connectDB();

const PORT = 5000

const server = app.listen(PORT,
    console.log(`Server running on ${PORT}`)
)
