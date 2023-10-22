const express = require("express");
const router = express.Router();
const { posts } = require("../models");

router.get("/", async (req, res) => {
  const postss = await posts.findAll();
  if (!postss) return res.json({ error: "Error, can't fetch doctors" });
  return res.json(postss);
});

module.exports = router;
