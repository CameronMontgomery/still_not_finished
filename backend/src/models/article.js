const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  }, 
  Author: {
    type: String,
    trim: true,
    required: true
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

const Article = new mongoose.model('Entry', entrySchema)

module.exports = Article