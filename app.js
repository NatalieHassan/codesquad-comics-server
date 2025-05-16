//Require the following dependencies: morgan, helmet and cors
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const app = express();

// Import routes
const bookRoutes = require('./routes/bookRoutes');

//Set the port to 3000 or the value of the PORT environment variable
const PORT = 8080;

//middleware
app.use(morgan('combined'));//logging HTTP requests
app.use(cors());//cross origin resource sharing
app.use(express.json());//parse incoming JSON
app.use(express.urlencoded({ extended: true }));//parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));//serve static files
app.use(helmet());//security headers

// Home route
app.get("/", (req, res, next) => {
  res.status(200).json({ success: { message: "This route points to the Home page" } });
});

// Use book routes
app.use('/api/books', bookRoutes);

//use app.listen() to start the server and send a console.log to the terminal with a start message
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the application`);
});

//Export the app module
module.exports = app;
