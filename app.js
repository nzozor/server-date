const express = require("express");
const app = express();
const cors = require("cors");
const https = require("https");
const fs = require("fs");

app.use(
  cors({
    origin: ["http://localhost:4200", "http://www.beautiskinclinic.com"],
  })
);

const httpsServer = https.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert"),
  },
  app
);

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});

app.get("/date", (req, res) => {
  res.send(new Date());
});

// // app.listen(3006);
// console.log("Web Server is listening at port " + 3006);
