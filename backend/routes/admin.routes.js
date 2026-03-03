const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Enquiry = require('../models/Enquiry');
const Enrollment = require('../models/Enrollment');

// ─── GET /api/admin/dashboard — Full dashboard stats ────
router.get('/dashboard', async (req, res) => {
  try {
    // Counts
    const [totalContacts, totalEnquiries, totalEnrollments] = await Promise.all([
      Contact.countDocuments(),
      Enquiry.countDocuments(),
      Enrollment.countDocuments(),
    ]);

    // Status breakdowns
    const [
      newContacts,
      contactedContacts,
      convertedContacts,
      pendingEnquiries,
      repliedEnquiries,
      pendingEnrollments,
      activeEnrollments,
      completedEnrollments,
    ] = await Promise.all([
      Contact.countDocuments({ status: 'new' }),
      Contact.countDocuments({ status: 'contacted' }),
      Contact.countDocuments({ status: 'converted' }),
      Enquiry.countDocuments({ status: 'pending' }),
      Enquiry.countDocuments({ status: 'replied' }),
      Enrollment.countDocuments({ status: 'pending' }),
      Enrollment.countDocuments({ status: 'active' }),
      Enrollment.countDocuments({ status: 'completed' }),
    ]);

    // Revenue
    const revenueResult = await Enrollment.aggregate([
      { $match: { paymentStatus: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    const totalRevenue = revenueResult[0]?.total || 0;

    // Recent entries (last 10 each)
    const [recentContacts, recentEnquiries, recentEnrollments] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).limit(10).select('name email phone program course status createdAt'),
      Enquiry.find().sort({ createdAt: -1 }).limit(10).select('name email phone program course source status createdAt'),
      Enrollment.find().sort({ createdAt: -1 }).limit(10).select('name email phone program course plan amount paymentStatus status createdAt'),
    ]);

    // Program distribution
    const programStats = await Contact.aggregate([
      { $group: { _id: '$program', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalContacts,
          totalEnquiries,
          totalEnrollments,
          totalRevenue,
        },
        contacts: {
          total: totalContacts,
          new: newContacts,
          contacted: contactedContacts,
          converted: convertedContacts,
        },
        enquiries: {
          total: totalEnquiries,
          pending: pendingEnquiries,
          replied: repliedEnquiries,
        },
        enrollments: {
          total: totalEnrollments,
          pending: pendingEnrollments,
          active: activeEnrollments,
          completed: completedEnrollments,
        },
        revenue: totalRevenue,
        programDistribution: programStats,
        recent: {
          contacts: recentContacts,
          enquiries: recentEnquiries,
          enrollments: recentEnrollments,
        },
      },
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── GET /api/admin/contacts — All contacts with pagination ─
router.get('/contacts', async (req, res) => {
  try {
    const { status, program, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (program) filter.program = program;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Contact.countDocuments(filter);

    res.json({ success: true, data: contacts, pagination: { total, page: Number(page), pages: Math.ceil(total / limit) } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── GET /api/admin/enquiries — All enquiries ──────────
router.get('/enquiries', async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Enquiry.countDocuments(filter);

    res.json({ success: true, data: enquiries, pagination: { total, page: Number(page), pages: Math.ceil(total / limit) } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ─── GET /api/admin/enrollments — All enrollments ──────
router.get('/enrollments', async (req, res) => {
  try {
    const { status, paymentStatus, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (paymentStatus) filter.paymentStatus = paymentStatus;

    const enrollments = await Enrollment.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Enrollment.countDocuments(filter);

    res.json({ success: true, data: enrollments, pagination: { total, page: Number(page), pages: Math.ceil(total / limit) } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
