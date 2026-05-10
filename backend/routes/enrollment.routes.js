const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Enrollment = require('../models/Enrollment');
const { authMiddleware } = require('../middleware/auth');

// Validation rules
const enrollmentValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('program').isIn(['cse-it', 'ece-ec', 'management']).withMessage('Valid program is required'),
  body('course').trim().notEmpty().withMessage('Course is required'),
  body('plan').isIn(['basic', 'standard', 'premium']).withMessage('Valid plan is required'),
  body('amount').isNumeric().withMessage('Amount must be a number'),
];

// ─── POST /api/enrollments — Create enrollment ─────────
router.post('/', enrollmentValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, phone, program, course, plan, amount } = req.body;

    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      program,
      course,
      plan,
      amount,
      paymentStatus: 'pending',   // Will be updated when payment gateway is added
      status: 'pending',
    });

    res.status(201).json({
      success: true,
      message: 'Enrollment created! Payment is pending.',
      data: {
        id: enrollment._id,
        // Payment gateway details will go here in the future
        // razorpayOrderId: ...,
      },
    });
  } catch (error) {
    console.error('Enrollment creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create enrollment. Please try again.',
    });
  }
});

// ─── GET /api/enrollments — Get all enrollments (admin, protected) ─
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { status, paymentStatus, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (paymentStatus) filter.paymentStatus = paymentStatus;

    const enrollments = await Enrollment.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Enrollment.countDocuments(filter);

    res.json({
      success: true,
      data: enrollments,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get enrollments error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── PATCH /api/enrollments/:id — Update enrollment (admin, protected) ────
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const { status, paymentStatus, paymentId, paymentGateway } = req.body;
    const update = {};
    if (status) update.status = status;
    if (paymentStatus) update.paymentStatus = paymentStatus;
    if (paymentId) update.paymentId = paymentId;
    if (paymentGateway) update.paymentGateway = paymentGateway;

    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!enrollment) {
      return res.status(404).json({ success: false, message: 'Enrollment not found' });
    }

    res.json({ success: true, data: enrollment });
  } catch (error) {
    console.error('Update enrollment error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── DELETE /api/enrollments/:id — Delete enrollment (admin, protected) ────
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ success: false, message: 'Enrollment not found' });
    }
    res.json({ success: true, message: 'Enrollment deleted successfully' });
  } catch (error) {
    console.error('Delete enrollment error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── GET /api/enrollments/stats — Dashboard stats (admin, protected) ──────
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const [total, pending, active, completed] = await Promise.all([
      Enrollment.countDocuments(),
      Enrollment.countDocuments({ status: 'pending' }),
      Enrollment.countDocuments({ status: 'active' }),
      Enrollment.countDocuments({ status: 'completed' }),
    ]);

    const revenue = await Enrollment.aggregate([
      { $match: { paymentStatus: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);

    res.json({
      success: true,
      data: {
        total,
        pending,
        active,
        completed,
        revenue: revenue[0]?.total || 0,
      },
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
