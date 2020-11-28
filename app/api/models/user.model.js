const mongoose = require('mongoose');
const { userRoles } = require('../helpers/consts');

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: userRoles,
    default: userRoles[1]
  }
});

module.exports = mongoose.model("User", UserSchema);