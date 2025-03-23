const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // Define app before using it

// Enable CORS for frontend communication
app.use(cors());

// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));