const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  content: String,
  likes: [String],
  comments: [String]
});

module.exports = mongoose.model("Post", PostSchema);
