// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import config from "./config";
import { __DEV__ } from "./const";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(app);

export const sendFireabseEvent = (eventName: string) =>
  !__DEV__ && logEvent(firebaseAnalytics, eventName);

export const FIREBASE_ANALYTICS_EVENTS = {
  WEBSITE_OPENED: "website_opened",
  LINKEDIN_CLICKED: "linkedin_clicked",
};
