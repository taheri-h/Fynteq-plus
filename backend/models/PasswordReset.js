const mongoose = require('mongoose');
const crypto = require('crypto');

const passwordResetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 3600000), // 1 hour from now
  },
  used: {
    type: Boolean,
    default: false,
  },
  usedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

// Indexes
passwordResetSchema.index({ token: 1 }, { unique: true });
passwordResetSchema.index({ userId: 1 });
passwordResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // Auto-delete expired tokens

// Generate a secure random token
passwordResetSchema.statics.generateToken = function() {
  return crypto.randomBytes(32).toString('hex');
};

// Find valid token
passwordResetSchema.statics.findValidToken = async function(token) {
  return await this.findOne({
    token,
    used: false,
    expiresAt: { $gt: new Date() },
  });
};

module.exports = mongoose.model('PasswordReset', passwordResetSchema);

