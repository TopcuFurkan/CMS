const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String
  },

  password: {
    type: String
  },
  
  email: {
    type: String
  },
  
  userType: {
    type: String
  },

}, { timestamps: true })

const User = mongoose.model('user', userSchema)
module.exports = User;
