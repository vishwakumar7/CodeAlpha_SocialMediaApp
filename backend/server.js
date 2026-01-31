const express = require("express");
const cors = require("cors");
require("./db");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/post", postRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
