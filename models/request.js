const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
 
  },
  // restuid: {
  //   type: String,
  //   required: true
  // },
  foodid: {
    type: String,
    required: true
  },
  restuemail: {
    type: String,
    required: true,
 
  },
  foodname: {
    type: String,
    required: true,
 
  },
  cnicreq: {
    type: Number,
    required: true,
    unique: false
  },
  address: {
    type: String,
    required: true,

  },
  emailreq: {
    type: String,
    required: true,
    unique: false
  },
  contactreq: {
    type: Number,
    required: true,
    unique: false
  },
  usertypereq: {
    type: String,
    required: true,
    unique: false
  },
  status: {
    type: String,
    required:true,
    default: "requested"
  },
  comment: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Request', requestSchema);
