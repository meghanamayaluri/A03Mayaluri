var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser"); // simplifies access to request body
var app = express();  // make express app
var http = require('http').Server(app);  // inject app into the server




// set up the view engine
app.set("views", path.resolve(__dirname, "assets")); // path to views
app.set("view engine", "ejs"); // specify view engine
app.use(express.static(__dirname + '/assets'));
// create an array to manage guestbook entries
var entries = [];
app.locals.entries = entries; 

// set up an http request logger to log every request automagically
app.use(logger("dev"));     // app.use() establishes middleware functions
app.use(bodyParser.urlencoded({ extended: false }));

// handle http GET requests (default & /new-entry)
app.get("/", function (request, response) {
    response.sendfile(path.join(__dirname +"/assets/about.html"));
});
app.get("/about", function (request, response) {
    response.sendfile(path.join(__dirname +"/assets/about.html"));
});
app.get("/find", function (request, response) {
    response.sendfile(path.join(__dirname +"/assets/find.html"));
});
app.get("/contact", function (request, response) {
    response.sendfile(path.join(__dirname  +"/assets/contact.html"));
});
app.get("/Guestbook", function (request, response) {
  response.render("index");
});




app.get("/new-entry", function (request, response) {
  response.render("new-entry");
});

// handle an http POST request to the new-entry URI 
app.post("/new-entry", function (request, response) {
    if (!request.body.title || !request.body.body) {
   
    response.status(400).send("Entries must have a name and a body.");
    return;
  }
  entries.push({  // store it
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("/Guestbook");  
});


// if we get a 404 status, render 404.ejs view
app.use(function (request, response) {
    response.status(404).render("404");
});
// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('GuestBook app is listening on http://127.0.0.1:8081/');
  console.log('');
  console.log('Navigation menu:');
  console.log('Get "/" - display default home page');
  console.log('Get "/about" - display about page');
  console.log('Get "/Contact" - display contact page');
  console.log('Get "/Find" - display find page');
  console.log('Get "/guestbook" - display guestbook page');
  console.log('Get "/new-entry" - display a form for creating a new guestbook entry');
  console.log('Post "/new-entry" - submit a new guestbook entry');
  console.log('');
});