// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd9CcxJac2qpqY20GYTiFE0DVw2J_H1uE",
  authDomain: "watchparty-3d876.firebaseapp.com",
  projectId: "watchparty-3d876",
  storageBucket: "watchparty-3d876.firebasestorage.app",
  messagingSenderId: "789876258013",
  appId: "1:789876258013:web:147c08ee0e68e5aa7a1734",
  measurementId: "G-H6PNKCKZYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth(app);