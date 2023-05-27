const express = require("express");
// randomBytes to create ids
const { randomBytes } = require("crypto");
// Whenever user sends JSON data in body of the req, so it actually get parsed
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// we are saving comments by posts in the memory rn, we'll deploy this on DB later
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const comments = commentsByPostId[id] || [];

  res.send(comments);
});

app.post("/posts/:id/comments", (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const commentId = randomBytes(4).toString("hex");
  const comments = commentsByPostId[id] || [];
  comments.push({ commentId, content });

  commentsByPostId[id] = comments;
  res.send(commentsByPostId);
});

app.post("post/:id/comments", (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const commentId = randomBytes(4).toString("hex");
  res.status(200).send(id);

  const comments = commentsByPostId[id] || [];
  comments.push({ commentId, content });

  res.status(200).send(comments);
});

app.get("start", (req, res) => {
  res.send("Comments service is running");
});

app.listen(8000, () => {
  console.log("Comments service listening at port 8000");
});
