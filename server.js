const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server is listening on port::${port}`));
