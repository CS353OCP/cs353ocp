// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");


// Configuration
const app = express();
app.use(cors());
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
app.use(bodyParser.json());

// Routing Files

// Login & Register
/*
const register = require("./controllers/register");
const login = require("./controllers/login");

// User
const profile = require("./controllers/profile");

// People Related
const people = require("./controllers/people");
const organizators = require("./controllers/organizators");
const admins = require("./controllers/admins");

// Event Related
const events = require("./controllers/events");

// Place Related
const places = require("./controllers/places");

// User related network
const following = require("./controllers/following");
const followers = require("./controllers/followers");

// User related favorite
const favoriteEvents = require("./controllers/favorite-events");
const favoritePlaces = require("./controllers/favorite-places");

// Unexpected Endpoints
const error = require("./controllers/error");
*/
// Server
app.listen(5000,() => console.log("Server listening at port 5000"));

// Routing

// Get Routes

// Return profile
app.get("/profile", (req, res) => {
    res.send("profile");
});

// Return all people
app.get("/people", (req, res) => {
    res.send("people");
});

// Return all Admins
app.get("/admins", (req, res) => {
    res.send("Admins");
});

// Return all events
app.get("/events", (req, res) => {
    res.send("All events");
});

// Return All organizators
app.get("/organizators", (req, res) => {
    res.send("All organizators");
});

// Return All places
app.get("/places",cors(), (req, res) => {
    console.log("Alllasdads");
    res.send("All places");
});

// Return followed people by logged in account
app.get("/following", (req, res) => {
    res.send("Following");
});

// Return followers of the account logged in
app.get("/followers", (req, res) => {
    res.send("Followers");
});

// Return Options to redirect user to events or places
app.get("/favorite", (req, res) => {
    res.send("favorite events");
})

// Return favorite events of logged in account
app.get("/favorite/events", (req, res) => {
    res.send("favorite events");
});

// Return favorite places of logged in account
app.get("/favorite/places", (req, res) => {
    res.send("favorite places");
});

// Main Directory
app.get("/", (req, res) => {
    res.send("Home");
});
app.post("/places", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
});
app.get("/eventsList", (req, res) => {
    console.log(req.body);
    let a = ["football ", "basketball ", "piyasaYapmaca "];
    res.send(a);
});

app.get("/nearEventsList", (req, res) => {
    console.log(req.body);
    let a = ["piyasaYapmaca "];
    res.send(a);
});
// Add otherwise forwarding
app.get('*', (req, res, next) => {
    res.send("Error");
});

