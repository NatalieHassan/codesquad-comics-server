//Require the following dependencies: morgan, helmet and cors
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Require the following dependencies: morgan, helmet and cors
const helmet = require('helmet');
const app = express();


//Set the port to 3000 or the value of the PORT environment variable
const PORT = 8080;

//middleware
//Require the following dependencies: morgan, helmet and cors
app.use(morgan('combined'));//logging HTTP requests
app.use(cors());//cross origin resource sharing
app.use(express.json());//parse incoming JSON
app.use(helmet());//security headers

//Require the following module after the dependencies: path
//PATH: /, HANDLER: "This route points to the Home page
app.get("/", (request, response, next) => {
  response.send("This route points to the Home page");
});


//Create six basic GET routes with the following information using the .send() method and the request/response/next parameter:






//PATH: /api/books, HANDLER: "This will send all of the book data"
app.get("/api/books", (request, response, next) => {
  response.send("This will send all of the book data");
});
//PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
app.get("/api/books/:id", (request, response, next) => {
  response.send("This will send a single book by its id");
});
//PATH: /api/books/create/new, HANDLER: "This will create a new book"
app.get("/api/books/create/new", (request, response, next) => {
  response.send("This will create a new book");
});
//PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
app.get("/api/books/update/:id", (request, response, next) => {
  response.send("This will update a book by its id");
});
//PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id" 
app.get("/api/books/delete/:id", (request, response, next) => {
  response.send("This will delete a book by its id");
});

//use app.listen() to start the server and send a console.log to the terminal with a start message that says `The server is listening on port ${PORT}`
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
}
);
//Export the app module
module.exports = app;
