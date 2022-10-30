const express = require("express");
const app = express();

app.get("/date", (req, res) => {
  res.send(new Date());
});

app.listen(3006);
console.log("Web Server is listening at port " + 3006);
