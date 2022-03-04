const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.listen(4001, () => console.log("running on port 4001... lalalala"));
