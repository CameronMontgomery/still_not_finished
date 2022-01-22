const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    trim: true,
    required: true
  }
})

const Entry = new mongoose.model('Entry', entrySchema)

module.exports = Entry