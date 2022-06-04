const express = require("express");
const app = express();

const quotes = require("./quotes.json");
const port = 3000;

// AUX FUNCTIONS
function pickFromArray(arr) {
  const position = Math.random() * arr.length
  const index = Math.floor(position)
  return arr[index];
   
}


// ENDPOINTS
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  // response.send(request.query.term);
  response.send(quotes.filter(q => q.quote.includes(request.query.term)))
  
});
// START SERVER
app.listen(port, function () {
  console.log(`Your app is listening on: http://localhost:${port}`);
});
