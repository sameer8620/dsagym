const mongoose = require("mongoose");

const dsaSheetSchema = mongoose.Schema({
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
  completed: {
    type: Boolean,
    default: false,
  },
});

const DsaSheet = mongoose.model("DSASHEET", dsaSheetSchema);

module.exports = DsaSheet;
