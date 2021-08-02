const express = require("express");
const router = express.Router();
const DsaSheet = require("../models/fraz");

router.get("/", (req, res) => {
  res.send("Its works");
});

router.get("/:topic", async (req, res) => {
  const topic = req.params.topic;
  try {
    const content = await DsaSheet.find({ topic });
    res.status(200).json(content);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

module.exports = router;
