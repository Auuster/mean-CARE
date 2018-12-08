var mongoose = require('mongoose');
var Doctor = require('../models/Doctor.js');

var PatientSchema = new mongoose.Schema({
  name: {
  	first: String,
    middle: String,
    last: String
    },
  title: String,
  sex: String,
  birthdate: Date,
  contact: {
  	home: String,
  	mobile: String,
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

  doctors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}],
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', PatientSchema);