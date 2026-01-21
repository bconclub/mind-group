# Mind Group Advisors - Deployment Guide

## Shared Hosting Deployment (cPanel/GoDaddy/Hostinger)

### Prerequisites
- Access to cPanel File Manager or FTP credentials
- Domain configured and pointing to your hosting

### Step 1: Build Production Files
```bash
npm run build
```
This creates a `/dist` folder with optimized production files.

### Step 2: Upload Files to Server

#### Option A: Using cPanel File Manager
1. Log into your cPanel
2. Navigate to **File Manager**
3. Go to `public_html` folder (or your domain's root directory)
4. **Delete all existing files** in the directory (if this is a fresh install)
5. Upload **ALL contents** from the `/dist` folder:
   - `index.html`
   - `assets/` folder
   - `.htaccess` file
   - All image/video files (favicon.ico, og-image.jpg, etc.)
   - `brand logos/` folder
   - `team/` folder

#### Option B: Using FTP (FileZilla/WinSCP)
1. Connect to your server using FTP credentials
2. Navigate to `public_html` or your domain root
3. Upload all contents from `/dist` folder
4. Ensure `.htaccess` file is uploaded (enable "Show hidden files" in your FTP client)

### Step 3: Verify Deployment

Visit your domain:
- **Homepage**: `https://yourdomain.com/`
- **About Page**: `https://yourdomain.com/about`
- **Services Page**: `https://yourdomain.com/services`
- **Leadership Page**: `https://yourdomain.com/leadership`
- **Contact Page**: `https://yourdomain.com/contact`

All routes should work without 404 errors.

### Step 4: Update Meta Tags (Post-Deployment)

After deployment, update `index.html` with your actual domain:

1. Open `/dist/index.html`
2. Replace all instances of `https://mindgroupadvisors.com/` with your actual domain
3. Update `og:image` and `twitter:image` to use full URLs:
   ```html
   <meta property="og:image" content="https://yourdomain.com/og-image.jpg">
   <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg">
   ```
4. Re-upload the updated `index.html`

### Troubleshooting

#### Issue: Routes show 404 errors
**Solution**: Ensure `.htaccess` file is uploaded and mod_rewrite is enabled on your server.

#### Issue: Images/videos not loading
**Solution**: 
- Check that all files from `/dist` are uploaded
- Verify folder structure matches: `public_html/assets/`, `public_html/brand logos/`, etc.
- Check file permissions (should be 644 for files, 755 for folders)

#### Issue: Blank white page
**Solution**:
- Check browser console for errors
- Ensure all files in `/dist/assets/` are uploaded
- Clear browser cache and hard refresh (Ctrl+Shift+R)

#### Issue: Styles not loading
**Solution**:
- Verify the CSS file in `/dist/assets/` is uploaded
- Check that the CSS filename in `index.html` matches the uploaded file

### File Structure on Server

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── og-image.jpg
├── Mind Group Logo white.png
├── Mind Group Logo.png
├── Mindgroup Hero.webp
├── Mindgroup hero New.webp
├── Data center.webp
├── PCOT.webp
├── Sky Mind Group.mp4
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── brand logos/
│   ├── Blue PEak.png
│   ├── digilium.png
│   └── msc logo.png
└── team/
    ├── Jennifer Hill.png
    ├── B.R. Sheaker.jpg
    └── Deep Murthy.jpg
```

### Performance Optimization (Optional)

1. **Enable Gzip Compression** - Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

2. **Browser Caching** - Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### SSL Certificate

Most shared hosting providers offer free SSL certificates (Let's Encrypt):
1. Log into cPanel
2. Navigate to **SSL/TLS Status** or **Let's Encrypt SSL**
3. Enable SSL for your domain
4. Force HTTPS by adding to `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Support

For hosting-specific issues:
- **cPanel**: Contact your hosting provider's support
- **GoDaddy**: https://www.godaddy.com/help
- **Hostinger**: https://www.hostinger.com/tutorials

---

**Last Updated**: January 2026
**Built with**: Vite + React + Tailwind CSS
