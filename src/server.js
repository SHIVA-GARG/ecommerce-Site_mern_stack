const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
env.config();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello,from server side",
  });
});

app.post("/data", (req, res) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(PORT, () => console.log(`server is running on: ${PORT}`));
