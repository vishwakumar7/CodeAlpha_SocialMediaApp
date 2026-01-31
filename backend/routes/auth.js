const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({ ...req.body, password: hashed });
  await user.save();
  res.send("Registered");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("Invalid");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.send("Invalid");

  res.send("Login success");
});

module.exports = router;
