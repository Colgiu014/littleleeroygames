# 🚀 Setup Instructions - Little Leeroy Games Website

## ✅ What's Done

Your professional game studio website is ready! Here's what's been created:

### 🎨 Components
- **Header**: Fixed navigation with smooth scroll
- **Hero**: Eye-catching hero section with animations
- **Games**: Showcase section for BBBlocks and future games
- **About**: Studio information and values
- **Contact**: Form that saves to Firebase Firestore
- **Footer**: Professional footer with links

### 🔧 Technical Setup
- Next.js 16 with TypeScript
- Tailwind CSS 4 for styling
- Firebase integration (Firestore ready)
- Framer Motion animations
- Fully responsive design
- SEO optimized

## 📋 Next Steps (Required)

### 1. Add BBBlocks Screenshot
Save your BBBlocks game screenshot to:
```
/home/cristi/dev/littleleeroygames/public/games/bbblocks.jpg
```

**Option A - If screenshot is on your computer:**
```bash
cp /path/to/your/bbblocks-screenshot.jpg /home/cristi/dev/littleleeroygames/public/games/bbblocks.jpg
```

**Option B - Download from URL:**
```bash
curl -o /home/cristi/dev/littleleeroygames/public/games/bbblocks.jpg https://your-screenshot-url.com/image.jpg
```

**Option C - Manual:**
1. Open your file manager
2. Navigate to `/home/cristi/dev/littleleeroygames/public/games/`
3. Copy your screenshot there and rename it to `bbblocks.jpg`

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing):
   - Project name: "Little Leeroy Games" (or your choice)
   - Enable Google Analytics (optional)

3. Enable Firestore:
   - Go to Firestore Database
   - Click "Create database"
   - Start in production mode
   - Choose region (europe-west for Romania)

4. Get your Firebase config:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click "Web" icon (</>) to add web app
   - Register app name: "Little Leeroy Games Website"
   - Copy the config values

5. Create `.env.local` file:
```bash
cd /home/cristi/dev/littleleeroygames
cp .env.local.example .env.local
nano .env.local  # or use your preferred editor
```

6. Paste your Firebase config values into `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

7. Set Firestore security rules (in Firebase Console):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contact} {
      allow read: if false;  // Only you can read via console
      allow create: if true; // Anyone can submit contact form
    }
  }
}
```

## 🎮 Customize Your Website

### Update Game Links
Edit `components/Games.tsx` line ~17:
```typescript
link: 'https://play.google.com/store/apps/details?id=your.bbblocks.app',
// or for iOS
link: 'https://apps.apple.com/app/bbblocks/idXXXXXXXX',
```

### Update Contact Email
The email `contact@littleleeroygames.com` is currently a placeholder. Update in:
- `components/Contact.tsx` (line ~122)
- `components/Footer.tsx` (line ~59)

### Add Social Media Links
Edit `components/Footer.tsx` to add Instagram, Twitter, etc.

### Update About Section
Edit `components/About.tsx` to customize your studio story.

## 🌐 View Your Website

The development server is running at:
**http://localhost:3000**

Open it in your browser to see your website!

## 📱 For Your PFA Registration

This website will help you:
- ✅ Show professional portfolio to potential clients/partners
- ✅ Demonstrate your business legitimacy
- ✅ Have a contact point for business inquiries
- ✅ Showcase your products (BBBlocks and future games)

**Domain Suggestion**: Consider registering `littleleeroygames.ro` or `.com`

## 🚀 Deploy to Production

### Recommended: Vercel (Free)

1. Push code to GitHub:
```bash
cd /home/cristi/dev/littleleeroygames
git add .
git commit -m "Initial studio website"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import your repository
5. Add environment variables (your Firebase config)
6. Deploy!

Your website will be live at: `your-project.vercel.app`
You can add custom domain later.

## 📊 Monitor Contact Form Submissions

View submissions in Firebase Console:
1. Go to Firestore Database
2. Open `contacts` collection
3. See all submissions with timestamp, name, email, message

## 🆘 Troubleshooting

**Images not loading?**
- Make sure screenshot is named exactly `bbblocks.jpg` (lowercase)
- Check file is in `/home/cristi/dev/littleleeroygames/public/games/`

**Contact form not working?**
- Check Firebase credentials in `.env.local`
- Verify Firestore is enabled in Firebase Console
- Check browser console for errors

**Page not loading?**
- Run `npm install` again
- Delete `.next` folder and restart: `rm -rf .next && npm run dev`

## 📞 Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Check terminal for build errors
3. Verify all files are in correct locations
4. Ensure `.env.local` has correct Firebase values

---

**Baftă cu PFA-ul și studio-ul! 🎮🇷🇴**

Good luck with your PFA and studio! You've got a professional website ready to go!
