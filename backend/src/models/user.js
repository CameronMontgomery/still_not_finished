const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email seems to be invalid, please provide valid email')
      }
    }
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      const passReq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
      
      if (!value.match(passReq)) {
        throw new Error('Password must include an uppercase & lowercase letter and number')
      }
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User