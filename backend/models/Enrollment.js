const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  // Student info
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

  // Course info
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
  plan: {
    type: String,
    required: [true, 'Plan is required'],
    enum: ['basic', 'standard', 'premium'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },

  // Payment info (for future payment gateway integration)
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentId: {
    type: String,
    default: null,
  },
  paymentGateway: {
    type: String,
    enum: ['razorpay', 'phonepe', 'manual', null],
    default: null,
  },

  // Enrollment status
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

enrollmentSchema.index({ email: 1 });
enrollmentSchema.index({ paymentStatus: 1 });
enrollmentSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
