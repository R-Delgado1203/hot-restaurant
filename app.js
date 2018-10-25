var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
var waitlist = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


app.post("/api/tables", function (req, res) {
    var newReservation = req.body;

    newReservation.id = newReservation.name
    console.log(newReservation);
    tables.push(newReservation);
    res.json(newReservation);
});
app.post("/api/waitlist", function (req, res) {
    var wait = req.body;

    wait.id = wait.name
    console.log(wait);
    waitlist.push(wait);
    res.json(wait);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
