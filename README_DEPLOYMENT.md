# Fynteq Website - Deployment Guide

## 🚀 Quick Deploy to Hostinger

### Step 1: Upload Files
1. Upload entire `build/` folder contents to Hostinger `public_html/`
2. Make sure `.htaccess` is uploaded (show hidden files)

### Step 2: Create/Update .htaccess

In Hostinger File Manager, create `.htaccess` with this content:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Step 3: Clear Cache
1. Hostinger Panel → Cache → Clear All
2. Wait 5 minutes
3. Test in incognito mode

### Step 4: Test URLs
- `https://fynteq.com/` - English homepage
- `https://fynteq.com/de` - German homepage
- `https://fynteq.com/de#services` - German with hash navigation

---

## ✅ What's Included

- ✅ English & German versions (14 pages each)
- ✅ Hash navigation (#services, #pricing, #contact, #faq)
- ✅ Auto language detection (German browsers → /de)
- ✅ Performance optimizations
- ✅ SEO optimized
- ✅ Mobile-friendly

---

## 🐛 If Not Working

Contact Hostinger support and ask them to:
1. Enable mod_rewrite
2. Set AllowOverride to All

---

## 📞 Support

If issues persist after upload:
1. Check if `.htaccess` exists
2. Verify file permissions are 644
3. Clear all caches
4. Test in incognito mode

