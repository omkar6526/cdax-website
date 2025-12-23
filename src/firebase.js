import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCc-GJJKPP5Xc2dzE7J5OIFZqRoo-nZ6Tk",
  authDomain: "cdaxwebsite.firebaseapp.com",
  databaseURL: "https://cdaxwebsite-default-rtdb.firebaseio.com",
  projectId: "cdaxwebsite",
  storageBucket: "cdaxwebsite.firebasestorage.app",
  messagingSenderId: "937711616006",
  appId: "1:937711616006:web:63075f1c97c8095eb08387",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 MOST IMPORTANT EXPORT
export const db = getDatabase(app);
