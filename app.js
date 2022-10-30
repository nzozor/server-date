const express = require("express");
const app = express();
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const http = require("http");

app.use(
  cors({
    origin: "*",
  })
);

// const httpsServer = https.createServer(
//   {
//     key: fs.readFileSync("./server.key"),
//     cert: fs.readFileSync("./server.cert"),
//   },
//   app
// );

// httpsServer.listen(443, () => {
//   console.log("HTTPS Server running on port 443");
// });

app.get("/date", (req, res) => {
  res.send(new Date());
});

const httpServer = http.createServer(app);

httpServer.listen(3006, () => {
  console.log("HTTP Server running on port 3006");
});
// console.log("Web Server is listening at port " + 3006);
