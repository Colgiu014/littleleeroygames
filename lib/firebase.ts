import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// Replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
  );
};

// Initialize Firebase only if configured
let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

if (isFirebaseConfigured()) {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
  
  // Initialize Analytics only on client side
  if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
  }
} else {
  console.warn('Firebase is not configured. Please add your Firebase credentials to .env.local');
}

export { app, db, analytics, isFirebaseConfigured };
