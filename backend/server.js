const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const connectDB = require('./config/db');

// Load env from parent .env
dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

const app = express();

// ─── Middleware ──────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:9002", "http://localhost:3000"],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: { maxAge: 31536000, includeSubDomains: true },
}));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// CORS — allow production domain when set
const allowedOrigins = [
  'http://localhost:9002',
  'http://localhost:3000',
  ...(process.env.PRODUCTION_URL ? [process.env.PRODUCTION_URL] : []),
];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman in dev)
    if (!origin && process.env.NODE_ENV !== 'production') return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Security: NoSQL Injection Protection ───────────────
app.use(mongoSanitize());

// ─── Security: HTTP Parameter Pollution ─────────────────
app.use(hpp());

// ─── Security: Rate Limiting ────────────────────────────
// General API: 100 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', apiLimiter);

// Strict login limiter: 5 attempts per 15 minutes per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many login attempts. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict form submission limiter: 10 per 15 min per IP (POST only)
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Wrapper: apply formLimiter ONLY to POST requests (public form submissions)
// Admin GET/PATCH requests bypass this limiter (still protected by apiLimiter)
const postOnlyFormLimiter = (req, res, next) => {
  if (req.method === 'POST') return formLimiter(req, res, next);
  next();
};

// ─── Connect to MongoDB ─────────────────────────────────
connectDB();

// ─── Auth ───────────────────────────────────────────────
const { loginHandler, authMiddleware, logoutHandler } = require('./middleware/auth');

// ─── API Routes (formLimiter on POST only — GET/PATCH bypass for admin) ─────
app.use('/api/contacts', postOnlyFormLimiter, require('./routes/contact.routes'));
app.use('/api/enquiries', postOnlyFormLimiter, require('./routes/enquiry.routes'));
app.use('/api/enrollments', postOnlyFormLimiter, require('./routes/enrollment.routes'));

// Admin auth routes (public, rate-limited)
app.post('/api/admin/login', loginLimiter, loginHandler);

// Admin data routes (protected)
app.use('/api/admin', authMiddleware, require('./routes/admin.routes'));

// Admin logout
app.post('/api/admin/logout', authMiddleware, logoutHandler);

// ─── Health Check ───────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'CrystaSkill Backend API',
    timestamp: new Date().toISOString(),
  });
});

// ─── 404 Handler ────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ─── Error Handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message || 'Internal server error',
  });
});

// ─── Start Server ───────────────────────────────────────
const PORT = process.env.BACKEND_PORT || 5000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 CrystaSkill Backend running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   POST /api/contacts       — Contact form submissions`);
  console.log(`   POST /api/enquiries      — Course enquiries`);
  console.log(`   POST /api/enrollments    — Course enrollments`);
  console.log(`   GET  /api/health         — Health check\n`);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
  }
});

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
});

module.exports = app;
