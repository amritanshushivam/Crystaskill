const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
  yearOfStudy: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: ['1st', '2nd', '3rd', '4th', 'graduated', 'working'],
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new',
  },
  notes: {
    type: String,
    trim: true,
    default: '',
  },
}, {
  timestamps: true,
});

// Index for fast querying
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ program: 1 });

module.exports = mongoose.model('Contact', contactSchema);
