var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
      name: "",
      id: "",
      email: "",
      phone: 0
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reservations/:reservation", function(req, res) {
  var selected = req.params.reservation;

  console.log(selected);

  for (var i = 0; i < reservations.length; i++) {
    if (selected === reservations[i].id) {
      return res.json(reservations[i]);
    }
  }
  return res.json(false);
});


app.post("/api/reservations", function(req, res) {
  var newreservation = req.body;

  newreservation.id = newreservation.name.replace(/\s+/g, "").toLowerCase();
  console.log(newreservation);
  characters.push(newreservation);
  res.json(newreservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
