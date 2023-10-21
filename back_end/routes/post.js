const express = require("express");
const router = express.Router();
const { Users, Posts } = require("../models");

router.get("/", async (req, res) => {
  const posts = await Posts.findAll();
  if (!posts) return res.json({ error: "Error, can't fetch doctors" });
  return res.json(posts);
});

module.exports = router;
