const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');
const { authMiddleware } = require('../middleware/auth');

// Validation rules
const enquiryValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('program').isIn(['cse-it', 'ece-ec', 'management']).withMessage('Valid program is required'),
  body('course').trim().notEmpty().withMessage('Course is required'),
];

// ─── POST /api/enquiries — Submit enquiry ──────────────
router.post('/', enquiryValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, phone, program, course, message, source } = req.body;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      program,
      course,
      message: message || '',
      source: source || 'website',
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: { id: enquiry._id },
    });
  } catch (error) {
    console.error('Enquiry creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again.',
    });
  }
});

// ─── GET /api/enquiries — Get all enquiries (admin, protected) ────
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Enquiry.countDocuments(filter);

    res.json({
      success: true,
      data: enquiries,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get enquiries error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── PATCH /api/enquiries/:id — Update status (admin, protected) ──────────
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, data: enquiry });
  } catch (error) {
    console.error('Update enquiry error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── DELETE /api/enquiries/:id — Delete enquiry (admin, protected) ──────────
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (error) {
    console.error('Delete enquiry error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
