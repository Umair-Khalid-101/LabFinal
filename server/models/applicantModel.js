const mongoose = require("mongoose");

const ApplicationTemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HostelApps", ApplicationTemplate);
