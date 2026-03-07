const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { authMiddleware } = require('../middleware/auth');

// Validation rules
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('program').isIn(['cse-it', 'ece-ec', 'management']).withMessage('Valid program is required'),
  body('course').trim().notEmpty().withMessage('Course is required'),
  body('yearOfStudy').isIn(['1st', '2nd', '3rd', '4th', 'graduated', 'working']).withMessage('Valid year is required'),
];

// ─── POST /api/contacts — Submit contact form ──────────
router.post('/', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, phone, program, course, yearOfStudy } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      program,
      course,
      yearOfStudy,
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully! We will get back to you within 24 hours.',
      data: { id: contact._id },
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form. Please try again.',
    });
  }
});

// ─── GET /api/contacts — Get all contacts (admin, protected) ──────
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { status, program, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (program) filter.program = program;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── PATCH /api/contacts/:id — Update contact status (admin, protected) ───
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const update = {};
    if (status) update.status = status;
    if (notes !== undefined) update.notes = notes;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.json({ success: true, data: contact });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── DELETE /api/contacts/:id — Delete contact (admin, protected) ───
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
