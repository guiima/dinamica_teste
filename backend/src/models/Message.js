const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", MessageSchema);
