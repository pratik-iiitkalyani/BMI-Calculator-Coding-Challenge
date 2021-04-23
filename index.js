'use strict';
const express = require('express');
const port = process.env.port || 6000;
const bodyParser = require("body-parser");
// const cors = require('cors');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/v1/bmiCalculator', require('./routes/api/bmi'));


// Start the Server
app.listen(port, ()=>{
	console.log(`surver running on port ${port}`)
})