const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  // fiirst name can be optional when creating account
  firstName: {
    type: String,
    required: false
  },
  // last name can be optional when creating account
  lastName: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('users', UsersSchema);