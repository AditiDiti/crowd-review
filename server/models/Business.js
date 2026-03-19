const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  location: String
});

module.exports = mongoose.model("Business", businessSchema);