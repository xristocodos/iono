const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UsersSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  
  name:{
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  is_Instructor: {
    type: Boolean,
    required: false,
    default: false
  },

  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bookings"
  }]
  

});

module.exports = User = mongoose.model('Users', UsersSchema);