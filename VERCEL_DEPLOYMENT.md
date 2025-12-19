# Vercel Deployment Guide

## ✅ Configuration Complete

All files have been configured to ensure proper deployment on Vercel with working email functionality.

## Files Created/Modified

### 1. `vercel.json` - Vercel Configuration
- Configured build command and output directory
- Set up rewrites for SPA routing (fixes 404 on page reload)
- Configured serverless function timeout (10 seconds for email sending)

### 2. `api/send-consultation-email.js` - Serverless Function
- Proper Vercel serverless function format
- CORS headers enabled for cross-origin requests
- Input validation and sanitization
- Email sending via nodemailer with Gmail SMTP
- Sends to: `joel.kalimbwe@futuremedia.com.na` and `yoelowelly@gmail.com`
- Error handling and proper HTTP responses

### 3. `.vercelignore` - Deployment Exclusions
- Excludes unnecessary files from deployment

## How It Works

### Development (Local)
- Uses Vite plugin (`vite-plugin-email.js`) for email API
- Runs on `http://localhost:3007`
- Email API available at `/api/send-consultation-email`

### Production (Vercel)
- Vercel automatically detects and deploys `api/` folder as serverless functions
- Email API available at `https://your-domain.com/api/send-consultation-email`
- All routes redirect to `index.html` for client-side routing

## Deployment Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Configure Vercel deployment"
   git push
   ```

2. **Deploy on Vercel**
   - Connect your repository to Vercel
   - Vercel will auto-detect:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Framework Preset: Vite

3. **Verify Deployment**
   - Check that all pages load correctly
   - Test the consultation form
   - Verify emails are received

## Email Configuration

- **SMTP Host**: smtp.gmail.com
- **Port**: 587
- **From**: joelkalimbwe3@gmail.com
- **To**: 
  - joel.kalimbwe@futuremedia.com.na
  - yoelowelly@gmail.com

## Troubleshooting

### If emails don't send:
1. Check Vercel function logs in dashboard
2. Verify Gmail app password is correct
3. Ensure nodemailer is in dependencies

### If pages show 404:
1. Verify `vercel.json` is in root directory
2. Check that rewrites are configured correctly
3. Ensure build output is `dist` folder

### If API returns 404:
1. Verify `api/` folder is in root directory
2. Check function name matches route
3. Ensure function exports default handler

## Testing

After deployment, test:
- ✅ Page reloads (no 404 errors)
- ✅ Navigation between pages
- ✅ Consultation form submission
- ✅ Email delivery to both addresses

