import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkPHhUjSOfEpN8-UEV3lgDUlj5TJrsDW8",
  authDomain: "graphics-portfolio33.firebaseapp.com",
  projectId: "graphics-portfolio33",
  storageBucket: "graphics-portfolio33.appspot.com",
  messagingSenderId: "128907087937",
  appId: "1:128907087937:web:d9326c93fc9108230d76c0",
  measurementId: "G-YSFWJ07PDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
