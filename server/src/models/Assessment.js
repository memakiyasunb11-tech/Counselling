const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { 
    type: String,
    enum: ['Aptitude', 'Interest', 'Personality', 'Skill', 'Readiness'],
    required: true,
  },
  description: { type: String },
  isTimed: { type: Boolean, default: false },
  timeLimitMinutes: { type: Number },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Assessment', assessmentSchema);
