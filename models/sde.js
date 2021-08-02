const mongoose = require("mongoose");

const sdeSheetSchema = mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  solution: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const SdeSheet = mongoose.model("SDESHEET", sdeSheetSchema);

module.exports = SdeSheet;
