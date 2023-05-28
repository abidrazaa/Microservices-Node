const express = require("express");
const { randomBytes } = require("crypto"); // randomBytes to create ids
const bodyParser = require("body-parser"); // Whenever user sends JSON data in body of the req, so it actually get parsed
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

const posts = {}; // we are saving posts in the memory rn, we'll deploy this on DB later

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex"); // creating a random id of 4 bytes in hexadecimal format
  console.log("id generated ==>", id);
  const { title } = req.body;
  posts[id] = { id, title };

  await axios.post("http://localhost:8000/events", {
    type: "postCreated",
    data: {
      id,
      title,
    },
  });

  res.status(200).send(posts);
});

app.post('/events', (req, res) => {
  const event = req.body
  console.log("Event Received ==> ", event.type)
  res.send(`${event.type} event received successfully!!`)
})


app.listen(4000, () => {
  console.log("Posts service listening at port 4000");
});
