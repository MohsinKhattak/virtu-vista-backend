const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skillsRequired: {
    type: [String],
    required: true,
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert', 'advanced'],
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['fixed price', 'hourly rate'],
    required: true,
  },
  budget: {
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  },
 
});

module.exports = mongoose.model('JobPost', jobPostSchema);
