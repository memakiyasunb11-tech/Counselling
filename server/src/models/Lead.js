const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: {
    email: { type: String, required: true },
    phone: { type: String },
  },
  enquiryType: { type: String },
  leadSource: { type: String, default: 'Website Form' },
  stage: {
    type: String,
    enum: ['NEW', 'CONTACTED', 'CONSULTATION_BOOKED', 'CONVERTED', 'LOST'],
    default: 'NEW',
  },
  assignedCounsellorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CounsellorProfile',
  },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
