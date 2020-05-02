const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  users: {
    type: Array,
  },
});

const Group = mongoose.model("Group", GroupSchema);
