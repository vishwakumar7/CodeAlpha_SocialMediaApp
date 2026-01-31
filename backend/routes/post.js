const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/create", async (req, res) => {
  const post = new Post({ content: req.body.content, likes: [], comments: [] });
  await post.save();
  res.json(post);
});

router.get("/all", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/like/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes.push("like");
  await post.save();
  res.send("Liked");
});

router.post("/comment/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push(req.body.comment);
  await post.save();
  res.send("Comment added");
});

module.exports = router;
