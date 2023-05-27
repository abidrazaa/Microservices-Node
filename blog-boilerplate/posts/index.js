const express = require("express");
// randomBytes to create ids
const { randomBytes } = require("crypto");
// Whenever user sends JSON data in body of the req, so it actually get parsed
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// we are saving posts in the memory rn, we'll deploy this on DB later
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  // creating a random id of 4 bytes in hexadecimal format
  const id = randomBytes(4).toString("hex");
  console.log("id generated ==>", id);
  const { title } = req.body;
  posts[id] = { id, title };

  res.status(200).send(posts);
});

app.listen(4000, () => {
  console.log("Posts service listening at port 4000");
});
