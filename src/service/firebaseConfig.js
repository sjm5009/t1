import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.T1_SHOP_API_KEY,
  authDomain: process.env.T1_SHOP_AUTH_DOMAIN,
  databaseURL: process.env.T1_SHOP_DATABASE_URL,
  projectId: process.env.T1_SHOP_PROJECT_ID,
  storageBucket: process.env.T1_SHOP_STORAGE_BUCKET,
  messagingSenderId: process.env.T1_SHOP_MESSAGING_SENDER_ID,
  appId: process.env.T1_SHOP_APP_ID,
  measurementId: process.env.T1_SHOP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
