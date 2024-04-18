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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
