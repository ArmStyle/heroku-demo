var express = require("express");
var app = express();
var fs = require("fs");
const PORT = process.env.PORT || 8081;

app.get("/", function (req, res) {
  res.json({ result: "ok", data: [1, 2, 3, 4, 5] });
});
app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
    res.json({ result: "ok", data: JSON.parse(data) });
  });
});
app.get("/getUsers/:id", function (req, res) {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    res.end(JSON.stringify(user));
  });
});

app.post("/addUser", function (req, res) {
  fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    console.log(data);
    data["user4"] = users["user4"];
    res.end(JSON.stringify(user));
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host, port);
});
