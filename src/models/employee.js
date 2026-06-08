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

module.exports = mongoose.model('Employee', employeeSchema);

const employee = {
    FirstName: 'John',
    LastName: 'Doe',
    availability: ['Monday', 'Wednesday', 'Friday'],
    certifications: ['First Aid', 'CPR'],
    email: 'john.doe@example.com',
    PhoneNumber: '123-456-7890',
    dateJoined: 1780934326185
}