const app = require('../server'); // Import the Express app
const serverless = require('serverless-http');

module.exports = serverless(app); // Convert the Express app to a serverless function
