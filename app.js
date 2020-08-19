const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://htetaungkhant:htetaungkhant@2015@mysecretary.qrlvb.mongodb.net/MySecretary?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("database connected...");
});

app.listen(port, () => {
    console.log("Server Started...");
});