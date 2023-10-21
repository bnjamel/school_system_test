const express = require("express");
const router = express.Router();
const { Posts, Users } = require("../models");

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  const userPosts = await Users.findAll({ include: [Posts] });
  console.log(userPosts);
  if (!users) return res.json({ error: "Error, can't fetch doctors" });
  return res.json(userPosts);
});

module.exports = router;
