const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true
  },
  childAge: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true,
    enum: ['Play Group', 'Nursery', 'Kindergarten']
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
