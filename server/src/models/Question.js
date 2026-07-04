const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  assessmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assessment',
    required: true,
  },
  traitCategory: { type: String, required: true },
  questionText: { type: String, required: true },
  options: [{
    text: { type: String, required: true },
    weight: { type: Number, required: true },
  }],
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
