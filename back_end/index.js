const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = require("./models");

// ! Users Router
const userRouter = require("./routes/user");
app.use("/users", userRouter);

const postsRouter = require("./routes/post");
app.use("/posts", postsRouter);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3001, () => {
    console.log("Listening");
  });
});
