const express = require("express");
const router = express.Router();
const { posts, users } = require("../models");

router.get("/", async (req, res) => {
  const userss = await users.findAll();
  console.log(userss);

  const userPosts = await users.findAll({ include: [posts] });
  if (!userss) return res.json({ error: "Error, can't fetch doctors" });
  return res.json(userPosts);
});

module.exports = router;
