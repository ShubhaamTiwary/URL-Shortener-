const mongoose = require('mongoose')
// creates a short unique identifier
const shortId = require('shortid')

// Complete DB Schema 
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})
// naming DB and the schema to be used
module.exports = mongoose.model('ShortUrl', shortUrlSchema)