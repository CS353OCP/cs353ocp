const express = require("express");

const app = express();

app.listen(5000,() => console.log("Server listening at port 5000"));

app.get("/araba", (req, res) => {
    res.send("araba folder");
});

app.get("/events", (req, res) => {
    res.send("events.js");
    res.send("events page folder");
});

app.get("/", (req, res) => {
    res.send("Root Folder");
});

app.post("/", (req, res) => {
    res.send(req);
}) 
