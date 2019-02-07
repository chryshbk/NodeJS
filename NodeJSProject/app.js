/*
 * Author: Chrystian Rafael Sanches dos Santos
 * File name: app.js
 * StudentID: 040862854
 * Professor: Stanley Pieda
 * Date: October 21, 2018
 * Description: This file executes the server and connects to MongoDB calling all the other files.
 */

/*
    Declaring all the modules/libraries and storing them into the variables.
 */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// Retrieving data from foodInventory.js and index.js
require('./models/foodInventory');
const index = require('./routes/index');

// Declaring the database connection here. This will likely have its own file, but it is here for now.
const db = 'mongodb://localhost:27017/foodInventory';
mongoose.connect(db, {useNewUrlParser: true })
    .then(() => console.log(`Connected to ${db}...`))
    .catch(err => console.error('Could not connect to MongoDB...', err)); // Exception handling, catches the error in case MongoDB cannot connect.
const foodInventory = mongoose.model('foodInventory');

// Using a session cookie for our server.
app.use(session({ cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false}));
app.set('views', path.join(__dirname, 'views')); // Joining the pug.js API which has all the visuals.
app.set('view engine', 'pug');

app.use(bodyParser.json()); // returns the middleware that only parses json
app.use(bodyParser.urlencoded({ extended: false })); // returns the middleware that only parses urlencoded and parses the URL-encoded data with the querystring library.
app.use(cookieParser()); // Parses the cookie header and populate req.cookies with an object key containing the cookie names.
app.use(express.static(path.join(__dirname, 'public'))); // load the files within the public folder.

app.use(flash()); // all requests will have a req.flash() function that can be used for flash messages.

app.use('/', index); // Using the root path for index.

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`)); //listening to port 3000 for the localhost.

module.exports = app; // exporting it for testing purposes.