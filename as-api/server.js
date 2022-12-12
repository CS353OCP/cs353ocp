// Dependencies
const express = require("express");

// Configuration
const app = express();


// Server
app.listen(5000,() => console.log("Server listening at port 5000"));


// Routing

// Get Routes

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
app.get("/places", (req, res) => {
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

// Add otherwise forwarding
