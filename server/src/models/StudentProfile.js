const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  gradeClass: { type: String },
  schoolCollegeName: { type: String },
  location: {
    city: String,
    state: String,
    country: String,
  },
  academicInterests: [{ type: String }],
  careerInterests: [{ type: String }],
  parentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  assignedCounsellorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
