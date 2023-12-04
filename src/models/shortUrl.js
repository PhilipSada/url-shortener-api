const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true
  },
  preferredAlias:{type: String},
  destination: { type: String, required: true },
});

const ShortUrlModel = mongoose.model("shortUrl", schema);

module.exports = ShortUrlModel;