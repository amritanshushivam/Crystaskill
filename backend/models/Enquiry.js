const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  program: {
    type: String,
    required: [true, 'Program is required'],
    enum: ['cse-it', 'ece-ec', 'management'],
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true,
  },
  message: {
    type: String,
    trim: true,
    default: '',
  },
  source: {
    type: String,
    enum: ['website', 'chatbot', 'referral', 'other'],
    default: 'website',
  },
  status: {
    type: String,
    enum: ['pending', 'replied', 'converted', 'closed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

enquirySchema.index({ email: 1 });
enquirySchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Enquiry', enquirySchema);
