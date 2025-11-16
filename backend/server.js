require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payments');
const setupRoutes = require('./routes/setup');
const providerRoutes = require('./routes/providers');
const passwordResetRoutes = require('./routes/passwordReset');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Get allowed origins from environment or use defaults
    const allowedOrigins = process.env.FRONTEND_URL 
      ? [process.env.FRONTEND_URL]
      : ['http://localhost:3000', 'https://fynteq-com-357877.hostingersite.com', 'https://fynteq.com'];
    
    // Check if origin is allowed
    if (allowedOrigins.some(allowed => origin.includes(allowed.replace(/^https?:\/\//, '').replace(/^www\./, '')))) {
      callback(null, true);
    } else {
      // In production, allow any origin from the same domain
      if (process.env.NODE_ENV === 'production') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Fynteq API is running' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/setup', setupRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/password-reset', passwordResetRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

