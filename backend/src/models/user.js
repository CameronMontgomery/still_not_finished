const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
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

userSchema.statics.findByCredentials = async (email, password) => {
  const user = User.findOne({ email })

  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login, email or password doesn\'t match')
  }

  return user
}

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User