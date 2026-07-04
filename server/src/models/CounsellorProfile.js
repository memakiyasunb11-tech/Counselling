const mongoose = require('mongoose');

const counsellorProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialization: [{ type: String }],
  yearsOfExperience: { type: Number },
  bio: { type: String },
  availabilitySettings: {
    type: mongoose.Schema.Types.Mixed, // Storing time slots config
  }
}, { timestamps: true });

module.exports = mongoose.model('CounsellorProfile', counsellorProfileSchema);
