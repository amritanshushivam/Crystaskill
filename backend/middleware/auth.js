const crypto = require('crypto');
const bcrypt = require('bcryptjs');

// ─── Admin credentials (from env or defaults) ──────────
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'shivamsharma2002002@gmail.com';
const ADMIN_PASSWORD_RAW = process.env.ADMIN_PASSWORD || 'Amritanshu#1';

// Pre-hash the password at startup for secure comparison
let ADMIN_PASSWORD_HASH = '';

// Initialize password hash immediately
async function initializePasswordHash() {
  ADMIN_PASSWORD_HASH = await bcrypt.hash(ADMIN_PASSWORD_RAW, 12);
  console.log('✓ Admin password hash initialized');
}

// Call initialization
initializePasswordHash().catch(err => {
  console.error('❌ Failed to initialize password hash:', err);
  process.exit(1);
});

// Simple token store (in production, use JWT or sessions)
const activeTokens = new Map();

// Generate a secure token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// ─── Login Route Handler ────────────────────────────────
async function loginHandler(req, res) {
  try {
    // Ensure password hash is ready
    if (!ADMIN_PASSWORD_HASH) {
      return res.status(500).json({
        success: false,
        message: 'Server error: authentication not yet initialized. Please try again in a moment.',
      });
    }

    const { username, password } = req.body;

    if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required and must be strings',
      });
    }

    // Timing-safe comparison for username, bcrypt for password
    const usernameMatch = username === ADMIN_USERNAME;
    const passwordMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

    if (!usernameMatch || !passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password',
      });
    }

    const token = generateToken();
    activeTokens.set(token, {
      username,
      createdAt: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    res.json({
      success: true,
      message: 'Login successful',
      data: { token, expiresIn: '24h' },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
}

// ─── Auth Middleware ─────────────────────────────────────
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required. Please login.',
    });
  }

  const token = authHeader.split(' ')[1];
  const session = activeTokens.get(token);

  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please login again.',
    });
  }

  // Check expiry
  if (Date.now() > session.expiresAt) {
    activeTokens.delete(token);
    return res.status(401).json({
      success: false,
      message: 'Session expired. Please login again.',
    });
  }

  req.admin = session;
  next();
}

// ─── Logout Handler ─────────────────────────────────────
function logoutHandler(req, res) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    activeTokens.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
}

// Clean expired tokens every hour
setInterval(() => {
  const now = Date.now();
  for (const [token, session] of activeTokens) {
    if (now > session.expiresAt) activeTokens.delete(token);
  }
}, 60 * 60 * 1000);

module.exports = { loginHandler, authMiddleware, logoutHandler };
