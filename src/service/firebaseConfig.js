import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_T1_SHOP_API_KEY,
  authDomain: process.env.REACT_APP_T1_SHOP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_T1_SHOP_DATABASE_URL,
  projectId: process.env.REACT_APP_T1_SHOP_PROJECT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
