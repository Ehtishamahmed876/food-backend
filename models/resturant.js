
const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  govnumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: false

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: Number,
    required: true,
    unique: true
  },
  foodtype: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true,
    unique: false
  }
});

module.exports = mongoose.model('Resturant', resturantSchema);
