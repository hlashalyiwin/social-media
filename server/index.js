require("dotenv").config();

const PORT = process.env.PORT || 8080;

const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;

console.log("DB Connected");
console.log("JWT Secret is set");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { usersRouter } = require("./routes/users");
app.use("/users", usersRouter);

const { postsRouter } = require("./routes/posts");
app.use("/posts", postsRouter);

const { commentsRouter } = require("./routes/comments");
app.use("/comments", commentsRouter);

const { notisRouter } = require("./routes/notis");
app.use("/notis", notisRouter);

app.get("/", (req, res) => {
  res.json({ message: "Social Media API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
