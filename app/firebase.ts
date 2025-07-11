import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDZlU0Y6BbvBcdYGVLDcJWy7M3TbgB2R8",
  authDomain: "apache-desert.firebaseapp.com",
  databaseURL: "https://apache-desert-default-rtdb.firebaseio.com",
  projectId: "apache-desert",
  storageBucket: "apache-desert.appspot.com",
  messagingSenderId: "978362448972",
  appId: "1:978362448972:web:fe7219d55e2f498e5548e9",
  measurementId: "G-19RXPQGT6P"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics }; 