// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));


// Define a route for the root URL '/'
app.get('/', (req, res) => {
  // Send the 'index.html' file
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Start the server
const hostname = '0.0.0.0';
const port = process.env.PORT || 8080; // Default port is 8080 if PORT is not set
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
