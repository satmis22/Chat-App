import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDk7loB3NtJoX56zsY3lEU-vhsq5WC2pGc",
  authDomain: "chat-8b287.firebaseapp.com",
  projectId: "chat-8b287",
  storageBucket: "chat-8b287.appspot.com",
  messagingSenderId: "912373084423",
  appId: "1:912373084423:web:9fa2526edab85d8492d5a2",
  measurementId: "G-YETET16KVF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const analytics = getAnalytics(app);
export const storage = getStorage();