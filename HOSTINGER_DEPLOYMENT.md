# 🚀 Hostinger Deployment Guide

## ✅ Build Complete!

Your production build is ready in the `build/` folder.

---

## 📦 Step 1: Prepare Files

### What to Upload
Upload **ALL contents** of the `build/` folder to Hostinger's `public_html/` directory.

**Important files:**
- ✅ `index.html`
- ✅ `.htaccess` (for routing)
- ✅ `static/` folder (CSS, JS)
- ✅ `images/` folder
- ✅ All other files in `build/`

---

## 📤 Step 2: Upload to Hostinger

### Option A: File Manager (Recommended)
1. Log in to Hostinger Control Panel
2. Go to **File Manager**
3. Navigate to `public_html/`
4. **Delete old files** (if any)
5. Upload **all contents** from `build/` folder
6. Make sure `.htaccess` is uploaded (enable "Show hidden files")

### Option B: FTP
1. Connect via FTP (FileZilla, etc.)
2. Navigate to `public_html/`
3. Upload all files from `build/` folder
4. Ensure `.htaccess` is uploaded

---

## ⚙️ Step 3: Configure Backend API

### Update API URL

The frontend needs to know where your backend API is hosted.

**Option 1: Backend on Hostinger (Same Domain)**
- If backend is at `https://yourdomain.com/api`
- No changes needed if using relative URLs

**Option 2: Backend on Different Server**
- Update `src/contexts/AuthContext.tsx` before building:
  ```typescript
  const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-domain.com/api';
  ```
- Then rebuild: `npm run build`

**Option 3: Environment Variable (Recommended)**
1. Create `.env.production` file:
   ```
   REACT_APP_API_URL=https://your-backend-domain.com/api
   ```
2. Rebuild: `npm run build`
3. Upload new build files

---

## 🔧 Step 4: Backend Deployment

### If Deploying Backend to Hostinger

1. **Upload Backend Files:**
   - Upload `backend/` folder to your server
   - Or use a separate subdomain (e.g., `api.yourdomain.com`)

2. **Set Environment Variables:**
   - Create `.env` file in backend folder:
     ```env
     MONGODB_URI="mongodb://username:password@host:port/database?authSource=admin"
     MONGODB_DB="fynteq_saas"
     PORT=5001
     NODE_ENV=production
     JWT_SECRET="your-strong-secret-key-here"
     FRONTEND_URL="https://yourdomain.com"
     ```

3. **Install Dependencies:**
   ```bash
   cd backend
   npm install --production
   ```

4. **Start Backend:**
   - Use PM2 or similar process manager
   - Or configure as a service

---

## ✅ Step 5: Verify Deployment

### Test These URLs:
- ✅ `https://yourdomain.com/` - Homepage
- ✅ `https://yourdomain.com/signup` - Signup page
- ✅ `https://yourdomain.com/signin` - Signin page
- ✅ `https://yourdomain.com/dashboard` - Dashboard (after login)
- ✅ `https://yourdomain.com/setup` - Setup services

### Check:
- ✅ All pages load correctly
- ✅ Images display
- ✅ API calls work (check browser console)
- ✅ Authentication works
- ✅ Routing works (try refreshing a page)

---

## 🐛 Troubleshooting

### Issue: 404 on Page Refresh
**Solution:** Ensure `.htaccess` is uploaded and `mod_rewrite` is enabled

### Issue: API Calls Fail
**Solution:** 
- Check CORS settings in backend
- Verify `FRONTEND_URL` in backend `.env`
- Check browser console for errors

### Issue: Styles Not Loading
**Solution:**
- Clear browser cache
- Check file permissions (should be 644)
- Verify `static/css/` folder uploaded

### Issue: Images Not Showing
**Solution:**
- Check `images/` folder is uploaded
- Verify file paths in browser console
- Check file permissions

---

## 🔒 Security Checklist

Before going live:
- ✅ Change `JWT_SECRET` to strong random string
- ✅ Use HTTPS (SSL certificate)
- ✅ Update `FRONTEND_URL` in backend
- ✅ Remove debug console.logs
- ✅ Set `NODE_ENV=production` in backend
- ✅ Enable MongoDB authentication
- ✅ Restrict database access by IP

---

## 📊 Build Information

**Build Location:** `build/` folder
**Build Size:** ~145 KB (gzipped JS) + ~8 KB (CSS)
**Build Date:** Generated on build

---

## 🎯 Quick Checklist

- [ ] Upload all files from `build/` to `public_html/`
- [ ] Verify `.htaccess` is uploaded
- [ ] Configure backend API URL
- [ ] Deploy backend (if needed)
- [ ] Test all pages
- [ ] Test authentication
- [ ] Test API calls
- [ ] Clear cache
- [ ] Test in incognito mode

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify file permissions (644 for files, 755 for folders)
3. Check `.htaccess` exists
4. Verify `mod_rewrite` is enabled
5. Contact Hostinger support if needed

---

**Your build is ready! Upload the `build/` folder contents to Hostinger and you're live! 🚀**

