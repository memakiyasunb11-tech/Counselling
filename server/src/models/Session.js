const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
    required: true,
  },
  counsellorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CounsellorProfile',
    required: true,
  },
  sessionType: {
    type: String,
    enum: ['FREE_CONSULT', 'PAID_COUNSELLING', 'REPORT_REVIEW'],
    required: true,
  },
  status: {
    type: String,
    enum: ['BOOKED', 'CONFIRMED', 'COMPLETED', 'CANCELLED'],
    default: 'BOOKED',
  },
  scheduledStartTime: { type: Date, required: true },
  scheduledEndTime: { type: Date, required: true },
  meetingLink: { type: String },
  counsellorNotes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
