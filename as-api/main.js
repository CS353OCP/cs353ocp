const express = require("express");
const app = express();

function randomData() {
  return Math.random()*10;
}

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/", (req, res) => {
  var stg  = "Data:\t" + randomData(); 
  console.log("Response Sent from /");
  res.send(stg);
});

app.get("/page1", (req, res) => {
  var stg  = "P1:\t" + randomData(); 
  console.log("Response Sent from /page1");
  res.send(stg);
});

app.get("/page2", (req, res) => {
  var stg  = "P2:\t" + randomData(); 
  console.log("Response Sent from /page2");
  res.send(stg);
});

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));