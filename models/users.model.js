const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Demousers", usersSchema);
