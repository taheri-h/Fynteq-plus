# 🚀 Deploy to Hostinger - Same Domain Setup

## ✅ Build Ready!

Your production build is **ready** in the `build/` folder!

**Configuration:**
- ✅ Frontend uses `/api` (relative path - same domain)
- ✅ Works when backend is at `https://yourdomain.com/api/`
- ✅ All files optimized and minified

---

## 📤 Step 1: Upload Frontend to Hostinger

1. **Log in to Hostinger Control Panel**
2. **Open File Manager**
3. **Navigate to `public_html/`**
4. **Delete old files** (if any)
5. **Upload ALL contents** from `build/` folder:
   - `index.html`
   - `.htaccess` (important!)
   - `static/` folder
   - `images/` folder
   - All other files

**Important:** Make sure `.htaccess` is uploaded (enable "Show hidden files" in File Manager)

---

## ⚙️ Step 2: Setup Backend on Same Domain

You have two options:

### Option A: Backend as Subdirectory (Easiest)

**Structure:**
```
public_html/
  ├── index.html (frontend)
  ├── static/ (frontend)
  ├── .htaccess (frontend + API routing)
  └── api/ (backend folder)
      ├── server.js
      ├── routes/
      ├── models/
      └── package.json
```

**Steps:**
1. Create `api/` folder in `public_html/`
2. Upload backend files to `public_html/api/`
3. Update `.htaccess` (see below)

**Updated `.htaccess` for subdirectory:**
```apache
Options -MultiViews
RewriteEngine On

# Backend API routing - serve from api/ folder
RewriteCond %{REQUEST_URI} ^/api/(.*)$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/(.*)$ api/$1 [L,QSA]

# Frontend SPA routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule ^ index.html [QSA,L]
```

### Option B: Node.js Backend (If Hostinger Supports)

If Hostinger supports Node.js:

1. **Upload backend** to separate directory (e.g., `backend/`)
2. **Update `.htaccess`** to proxy API requests:
```apache
Options -MultiViews
RewriteEngine On

# Proxy API requests to Node.js backend
RewriteCond %{REQUEST_URI} ^/api/(.*)$
RewriteRule ^api/(.*)$ http://localhost:5001/api/$1 [P,L]

# Frontend SPA routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule ^ index.html [QSA,L]
```

3. **Start backend** on port 5001

---

## 🔧 Step 3: Configure Backend

### Update Backend `.env`:

Create `.env` file in your backend directory:

```env
MONGODB_URI="your-mongodb-connection-string"
MONGODB_DB="fynteq_saas"
PORT=5001
NODE_ENV=production
JWT_SECRET="your-strong-secret-key-here"
FRONTEND_URL="https://yourdomain.com"
```

**Important:** 
- Replace `yourdomain.com` with your actual domain
- Use a strong random string for `JWT_SECRET`

### Install Backend Dependencies:

```bash
cd api  # or your backend directory
npm install --production
```

---

## ✅ Step 4: Test Deployment

After uploading, test:

1. **Homepage:** `https://yourdomain.com/`
2. **API Health:** `https://yourdomain.com/api/health`
   - Should return: `{"status":"OK","message":"Fynteq API is running"}`
3. **Signup:** `https://yourdomain.com/signup`
4. **Signin:** `https://yourdomain.com/signin`

---

## 🐛 Troubleshooting

### API calls return 404?
- Check `.htaccess` has API routing rules
- Verify backend files are in `api/` folder
- Check file permissions (644 for files, 755 for folders)

### API calls fail with CORS error?
- Verify `FRONTEND_URL` in backend `.env` matches your domain
- Check backend CORS settings in `server.js`

### Frontend routes don't work (404 on refresh)?
- Ensure `.htaccess` is uploaded
- Check `mod_rewrite` is enabled (contact Hostinger support)
- Verify frontend routing rules in `.htaccess`

### Backend not starting?
- Check Node.js is installed (if using Node.js)
- Verify port 5001 is available
- Check backend `.env` file exists and is correct

---

## 📋 Quick Checklist

- [ ] Upload `build/` contents to `public_html/`
- [ ] Verify `.htaccess` is uploaded
- [ ] Upload backend to `public_html/api/` (or configure Node.js)
- [ ] Create backend `.env` file
- [ ] Set `FRONTEND_URL` in backend `.env`
- [ ] Install backend dependencies
- [ ] Start backend server (if Node.js)
- [ ] Test homepage
- [ ] Test API: `https://yourdomain.com/api/health`
- [ ] Test signup
- [ ] Test signin

---

## 🎯 Summary

**Frontend:** `build/` folder → `public_html/`
**Backend:** `backend/` folder → `public_html/api/`
**API URL:** `/api` (automatic - same domain)

**Everything is ready! Upload and test! 🚀**

