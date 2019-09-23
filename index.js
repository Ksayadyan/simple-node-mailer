// Npm modules
const express = require('express');

// Controllers;
const mailController = require('./controller/mail.controller');

// Initialize express server;
const app = express();

// Port
const PORT = process.env.port || 80;

// Assign base middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Initialize Routes

app.post('/mail', mailController);

app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`);

});





