const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://localhost:4000/events", event); // For post service

  await axios.post("http://localhost:4001/events", event); // For comments service
  console.log('Events fired')
  res.json({ status: "OK" });
});

app.listen(8000, () => {
  console.log("event bus listening at port 8000");
});
