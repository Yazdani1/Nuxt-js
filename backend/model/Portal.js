const mongoose = require("mongoose");

const portalScheman = mongoose.Schema({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("nuxtPortal", portalScheman);
