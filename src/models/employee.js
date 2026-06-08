// store the schema
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
    LastName: {
    type: String,
    required: true
  },
  availability: {
    type: [String],
    required: true
  },
  certifications: {
    type: [String],
    default: []
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  PhoneNumber: {
    String,
  },
  dateJoined: {
    type: Date,
    required: true
  },

});
const mongooseModel = mongoose.model('Employee', employeeSchema);
module.exports = mongoose.model('Employee', employeeSchema);

