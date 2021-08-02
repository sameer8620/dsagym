const express = require("express");
const router = express.Router();
const SdeSheet = require("../models/sde");

router.get("/", async (req, res) => {
  try {
    const content = await SdeSheet.find({});
    res.status(200).json(content);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

router.get("/:topic", async (req, res) => {
  const topic = req.params.topic;
  try {
    const content = await SdeSheet.find({ topic });
    res.status(200).json(content);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

module.exports = router;
