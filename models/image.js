const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  restuname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required:true,
    default: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  // time: {
  //   type: String,
  //   required: true,
  //   default: getTime
  // }
});
// function getTime() {
//   const currentDate = new Date();
//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const time = `${hours}:${minutes}`;

//   return time;
// }
module.exports = mongoose.model('Image', imageSchema);
