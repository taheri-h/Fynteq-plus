# Password Reset Feature - Implementation Guide

## ✅ What's Been Implemented

### Backend
1. **PasswordReset Model** (`backend/models/PasswordReset.js`)
   - Stores reset tokens
   - Auto-expires after 1 hour
   - Tracks if token has been used
   - Secure token generation using crypto

2. **API Routes** (`backend/routes/passwordReset.js`)
   - `POST /api/password-reset/forgot` - Request password reset
   - `POST /api/password-reset/verify` - Verify reset token
   - `POST /api/password-reset/reset` - Reset password with token
   - `POST /api/password-reset/change` - Change password (for authenticated users)

### Frontend
1. **ForgotPassword Page** (`src/pages/ForgotPassword.tsx`)
   - User enters email
   - Sends reset request
   - Shows success message

2. **ResetPassword Page** (`src/pages/ResetPassword.tsx`)
   - Validates token from URL
   - User enters new password
   - Confirms password
   - Resets password

3. **Signin Page Updated**
   - Added "Forgot password?" link

## 🔄 User Flow

1. User clicks "Forgot password?" on signin page
2. User enters email on `/forgot-password`
3. Backend generates secure token and stores it
4. **In Development**: Reset link is shown in console and response
5. **In Production**: Email would be sent with reset link
6. User clicks reset link → `/reset-password?token=...`
7. Token is validated
8. User enters new password
9. Password is reset
10. User redirected to signin page

## 🔒 Security Features

- ✅ Tokens expire after 1 hour
- ✅ Tokens can only be used once
- ✅ Tokens are cryptographically secure (32 bytes random)
- ✅ Email existence is not revealed (always returns success)
- ✅ Password validation (min 6 characters)
- ✅ Tokens auto-deleted after expiration

## 📡 API Endpoints

### Request Password Reset
```http
POST /api/password-reset/forgot
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "If an account with that email exists, a password reset link has been sent.",
  "resetLink": "http://localhost:3000/reset-password?token=..." // Only in development
}
```

### Verify Token
```http
POST /api/password-reset/verify
Content-Type: application/json

{
  "token": "abc123..."
}
```

**Response:**
```json
{
  "valid": true,
  "email": "user@example.com"
}
```

### Reset Password
```http
POST /api/password-reset/reset
Content-Type: application/json

{
  "token": "abc123...",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "message": "Password reset successfully. You can now sign in with your new password."
}
```

### Change Password (Authenticated)
```http
POST /api/password-reset/change
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

## 🚀 Testing

1. **Test Forgot Password:**
   ```bash
   curl -X POST http://localhost:5001/api/password-reset/forgot \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   ```

2. **Copy the reset link from response** (development mode)

3. **Test Reset Password:**
   ```bash
   curl -X POST http://localhost:5001/api/password-reset/reset \
     -H "Content-Type: application/json" \
     -d '{"token":"YOUR_TOKEN","newPassword":"newpass123"}'
   ```

## 📧 Email Integration (For Production)

Currently, the reset link is returned in the API response (development only).

**To add email sending in production:**

1. Install email service (e.g., Nodemailer, SendGrid, AWS SES)
2. Update `POST /api/password-reset/forgot` route
3. Send email with reset link instead of returning it
4. Remove `resetLink` from response

Example:
```javascript
// In routes/passwordReset.js
const nodemailer = require('nodemailer');

// After creating passwordReset token:
await sendResetEmail(user.email, resetLink);

async function sendResetEmail(email, resetLink) {
  // Configure email transporter
  // Send email with reset link
}
```

## ✅ Features

- ✅ Secure token generation
- ✅ Token expiration (1 hour)
- ✅ One-time use tokens
- ✅ Password validation
- ✅ User-friendly error messages
- ✅ Development mode shows reset link
- ✅ Production-ready structure
- ✅ Change password for authenticated users

## 🎯 Next Steps (Optional)

1. Add email service integration
2. Add rate limiting to prevent abuse
3. Add password strength requirements
4. Add password history (prevent reusing old passwords)

---

**Password reset feature is fully implemented and ready to use!** 🎉

