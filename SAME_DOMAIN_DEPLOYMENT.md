# 🚀 Same Domain Deployment Guide (Hostinger)

## ✅ Perfect Setup!

Since your backend is on the same domain as frontend, the current build is **ready to deploy**!

---

## 📦 Step 1: Upload Frontend

1. **Upload `build/` folder contents** to Hostinger's `public_html/`
2. **Important files:**
   - `index.html`
   - `.htaccess` (for routing)
   - `static/` folder
   - `images/` folder
   - All other files

---

## ⚙️ Step 2: Setup Backend on Same Domain

### Option A: Backend as Subdirectory (Recommended)

**Structure:**
```
public_html/
  ├── index.html (frontend)
  ├── static/ (frontend)
  ├── .htaccess (frontend routing)
  └── api/ (backend)
      ├── server.js
      ├── routes/
      ├── models/
      └── ...
```

**Setup:**
1. Create `api/` folder in `public_html/`
2. Upload backend files to `public_html/api/`
3. Configure `.htaccess` to route `/api/*` to backend

**`.htaccess` in `public_html/`:**
```apache
# Frontend routing (SPA)
Options -MultiViews
RewriteEngine On

# Backend API routing
RewriteCond %{REQUEST_URI} ^/api/(.*)$
RewriteRule ^api/(.*)$ api/server.php [L,QSA]

# Frontend routing (all other requests)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

### Option B: Backend via Node.js (If Hostinger Supports)

If Hostinger supports Node.js:

1. **Upload backend** to a separate directory (e.g., `backend/`)
2. **Configure reverse proxy** in `.htaccess`:
```apache
# Frontend routing
Options -MultiViews
RewriteEngine On

# Proxy API requests to Node.js backend
RewriteCond %{REQUEST_URI} ^/api/(.*)$
RewriteRule ^api/(.*)$ http://localhost:5001/api/$1 [P,L]

# Frontend routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

3. **Start backend** on port 5001 (or configured port)

---

## 🔧 Step 3: Backend Configuration

### Update Backend `.env`:

```env
MONGODB_URI="your-mongodb-connection-string"
MONGODB_DB="fynteq_saas"
PORT=5001
NODE_ENV=production
JWT_SECRET="your-strong-secret-key"
FRONTEND_URL="https://yourdomain.com"
```

### Update Backend CORS:

The backend `server.js` should already have:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

Make sure `FRONTEND_URL` in `.env` matches your domain.

---

## ✅ Step 4: Test

After deployment, test:

1. **Frontend:** `https://yourdomain.com/`
2. **API Health:** `https://yourdomain.com/api/health` (should return JSON)
3. **Signup:** `https://yourdomain.com/signup` (test API connection)
4. **Signin:** `https://yourdomain.com/signin`

---

## 🎯 Current Build Configuration

The build is configured to use:
- **Production:** `/api` (relative path - same domain)
- **Localhost:** `http://localhost:5001/api` (development only)

This means:
- ✅ Frontend at `https://yourdomain.com/`
- ✅ Backend at `https://yourdomain.com/api/`
- ✅ Works automatically!

---

## 📋 Deployment Checklist

- [ ] Upload `build/` contents to `public_html/`
- [ ] Upload backend to `public_html/api/` (or configure Node.js)
- [ ] Create/update `.htaccess` for routing
- [ ] Configure backend `.env` file
- [ ] Set `FRONTEND_URL` in backend `.env`
- [ ] Start backend server (if Node.js)
- [ ] Test homepage
- [ ] Test API: `https://yourdomain.com/api/health`
- [ ] Test signup
- [ ] Test signin

---

## 🐛 Troubleshooting

### API calls fail?
- Check backend is running
- Verify `.htaccess` routing is correct
- Check CORS settings in backend
- Verify `FRONTEND_URL` in backend `.env`

### 404 on API routes?
- Check `.htaccess` has API routing rules
- Verify backend files are in correct location
- Check file permissions

### Frontend routes don't work?
- Ensure `.htaccess` has frontend routing rules
- Check `mod_rewrite` is enabled
- Verify `.htaccess` is uploaded

---

## ✅ Ready to Deploy!

Your build is **ready**! Just upload:
1. `build/` folder → `public_html/`
2. Backend → `public_html/api/` (or configure Node.js)
3. Configure `.htaccess` for routing

**Everything is configured for same-domain deployment! 🚀**

