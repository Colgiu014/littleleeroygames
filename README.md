# Little Leeroy Games - Studio Website

A professional presentation website for Little Leeroy Games, an indie game studio from Romania, built with Next.js and Firebase.

## Features

- 🎮 **Modern Design**: Beautiful, responsive design with smooth animations
- 🔥 **Firebase Integration**: Contact form submissions stored in Firestore
- 📱 **Mobile-First**: Fully responsive across all devices
- ⚡ **Fast Performance**: Built with Next.js 16 for optimal speed
- 🎨 **Tailwind CSS**: Modern styling with Tailwind CSS 4
- ✨ **Smooth Animations**: Framer Motion for engaging user experience

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Database**: Firebase Firestore
- **Analytics**: Firebase Analytics
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 20+ installed
- A Firebase project (create one at [Firebase Console](https://console.firebase.google.com/))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Enable Firestore Database
   - Enable Analytics (optional)
   - Get your Firebase config from Project Settings

3. Create `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Add your Firebase credentials to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Add your game screenshot:
   - Save your BBBlocks game screenshot as `public/games/bbblocks.jpg`

### Development

Run the development server:

```bash
npm run dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
littleleeroygames/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Games.tsx           # Games showcase
│   ├── About.tsx           # About the studio
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── firebase.ts         # Firebase configuration
├── public/
│   └── games/              # Game screenshots
└── .env.local              # Environment variables (not in git)
```

## Customization

### Adding New Games

Edit `components/Games.tsx` and add new game objects to the `games` array:

```typescript
{
  id: 2,
  title: 'Your Game Name',
  description: 'Game description...',
  image: '/games/your-game.jpg',
  status: 'Available Now',
  platforms: ['Android', 'iOS'],
  link: 'https://your-game-link.com',
  color: 'from-blue-500 to-purple-600',
}
```

### Updating Studio Information

- **Hero Section**: Edit `components/Hero.tsx`
- **About Section**: Edit `components/About.tsx`
- **Contact Email**: Update in `components/Contact.tsx` and `components/Footer.tsx`

## Firebase Firestore Setup

1. In Firebase Console, go to Firestore Database
2. Create a collection named `contacts`
3. Set up security rules (example):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contact} {
      allow read: if false; // Only admin can read
      allow create: if true; // Anyone can submit
    }
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js (Netlify, AWS Amplify, Google Cloud Run, Railway, etc.)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase

## License

© 2026 Little Leeroy Games. All rights reserved.

## Support

For support, email contact@littleleeroygames.com

---

Made with ❤️ in Romania
