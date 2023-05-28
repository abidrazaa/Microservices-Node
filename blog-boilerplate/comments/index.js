const express = require("express");
const { randomBytes } = require("crypto"); // randomBytes to create ids
const bodyParser = require("body-parser"); // Whenever user sends JSON data in body of the req, so it actually get parsed
const app = express();
const axios = require("axios");
app.use(bodyParser.json());

const commentsByPostId = {}; // we are saving comments by posts in the memory rn, we'll deploy this on DB later

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const comments = commentsByPostId[id] || [];

  res.send(comments);
});

app.post("/posts/:id/comments", async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const commentId = randomBytes(4).toString("hex");
  const comments = commentsByPostId[id] || [];
  comments.push({ commentId, content });

  commentsByPostId[id] = comments;

  await axios.post("http://localhost:8000/events", {
    type: "commentCreated",
    data: {
      id: commentId,
      content,
      postId: id,
    },
  });
  res.send(commentsByPostId);
});

app.get("start", (req, res) => {
  res.send("Comments service is running");
});

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("Event Received ==> ", event.type);
  res.send(`${event.type} event received successfully!!`);
});

app.listen(4001, () => {
  console.log("Comments service listening at port 4001");
});
