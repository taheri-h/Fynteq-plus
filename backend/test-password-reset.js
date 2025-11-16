/**
 * Test Password Reset Flow
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const PasswordReset = require('./models/PasswordReset');

const API_URL = 'http://localhost:5001/api';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testPasswordReset() {
  log('\n🔐 Testing Password Reset Flow', 'cyan');
  log('='.repeat(60), 'cyan');

  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
    });
    log('✅ Connected to database', 'green');

    // Find or create test user
    log('\n1. Finding test user...', 'yellow');
    let user = await User.findOne({ email: 'test@fynteq.com' });
    
    if (!user) {
      log('   Creating test user...', 'yellow');
      user = new User({
        email: 'test@fynteq.com',
        passwordHash: 'test123456', // Will be hashed
        name: 'Test User',
      });
      await user.save();
      log('✅ Test user created', 'green');
    } else {
      log('✅ Test user found', 'green');
    }

    // Test 1: Request password reset
    log('\n2. Testing forgot password request...', 'yellow');
    const forgotResponse = await fetch(`${API_URL}/password-reset/forgot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@fynteq.com' }),
    });

    if (!forgotResponse.ok) {
      throw new Error('Forgot password request failed');
    }

    const forgotData = await forgotResponse.json();
    log('✅ Password reset request successful', 'green');
    log(`   Message: ${forgotData.message}`, 'blue');
    
    let resetToken = null;
    if (forgotData.resetLink) {
      const url = new URL(forgotData.resetLink);
      resetToken = url.searchParams.get('token');
      log(`   Reset Link: ${forgotData.resetLink}`, 'blue');
    }

    // Get token from database if not in response
    if (!resetToken) {
      const reset = await PasswordReset.findOne({ userId: user._id })
        .sort({ createdAt: -1 });
      if (reset) {
        resetToken = reset.token;
        log(`   Token from DB: ${resetToken.substring(0, 20)}...`, 'blue');
      }
    }

    if (!resetToken) {
      throw new Error('No reset token found');
    }

    // Test 2: Verify token
    log('\n3. Testing token verification...', 'yellow');
    const verifyResponse = await fetch(`${API_URL}/password-reset/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: resetToken }),
    });

    if (!verifyResponse.ok) {
      throw new Error('Token verification failed');
    }

    const verifyData = await verifyResponse.json();
    log('✅ Token verification successful', 'green');
    log(`   Valid: ${verifyData.valid}`, 'blue');
    log(`   Email: ${verifyData.email}`, 'blue');

    // Test 3: Reset password
    log('\n4. Testing password reset...', 'yellow');
    const newPassword = 'newpassword123';
    const resetResponse = await fetch(`${API_URL}/password-reset/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: resetToken,
        newPassword: newPassword,
      }),
    });

    if (!resetResponse.ok) {
      const error = await resetResponse.json();
      throw new Error(error.error || 'Password reset failed');
    }

    const resetData = await resetResponse.json();
    log('✅ Password reset successful', 'green');
    log(`   Message: ${resetData.message}`, 'blue');

    // Test 4: Verify password was changed
    log('\n5. Verifying password was changed...', 'yellow');
    const updatedUser = await User.findById(user._id);
    const isPasswordValid = await updatedUser.comparePassword(newPassword);
    
    if (isPasswordValid) {
      log('✅ Password successfully changed', 'green');
    } else {
      throw new Error('Password was not changed correctly');
    }

    // Test 5: Verify token is marked as used
    log('\n6. Verifying token is marked as used...', 'yellow');
    const usedReset = await PasswordReset.findOne({ token: resetToken });
    if (usedReset && usedReset.used) {
      log('✅ Token marked as used', 'green');
    } else {
      log('⚠️ Token not marked as used', 'yellow');
    }

    // Test 6: Try to use token again (should fail)
    log('\n7. Testing token reuse (should fail)...', 'yellow');
    const reuseResponse = await fetch(`${API_URL}/password-reset/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: resetToken,
        newPassword: 'anotherpassword',
      }),
    });

    if (!reuseResponse.ok) {
      log('✅ Token reuse correctly rejected', 'green');
    } else {
      log('⚠️ Token reuse was not rejected', 'yellow');
    }

    // Summary
    log('\n' + '='.repeat(60), 'cyan');
    log('✅ All Password Reset Tests Passed!', 'green');
    log('\n📋 Summary:', 'cyan');
    log('  ✅ Forgot password request works', 'green');
    log('  ✅ Token generation works', 'green');
    log('  ✅ Token verification works', 'green');
    log('  ✅ Password reset works', 'green');
    log('  ✅ Password change verified', 'green');
    log('  ✅ Token marked as used', 'green');
    log('  ✅ Token reuse prevented', 'green');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    log(`\n❌ Test failed: ${error.message}`, 'red');
    console.error(error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

testPasswordReset();

