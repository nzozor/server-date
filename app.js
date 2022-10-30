const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:4200", "http://www.beautiskinclinic.com"],
  })
);

app.get("/date", (req, res) => {
  res.send(new Date());
});

app.listen(3006);
console.log("Web Server is listening at port " + 3006);
