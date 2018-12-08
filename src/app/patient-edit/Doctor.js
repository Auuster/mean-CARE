var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
  name: {
  	first: String,
    middle: String,
    last: String
    },
  contact: {
  	work: String,
  	email: String,
  },
  address: {
  	line1: String,
  	line2: String,
  	country: String,
  	province: String,
  	town: String,
  	postal: String
  },
  comments: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', DoctorSchema);