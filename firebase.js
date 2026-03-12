// firebase.js - Configuración de Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCf2Bpc_146WvEVlOoFsbQfEGMjWZpWBz0",
  authDomain: "dashboard-legal-eedee.firebaseapp.com",
  projectId: "dashboard-legal-eedee",
  storageBucket: "dashboard-legal-eedee.firebasestorage.app",
  messagingSenderId: "635760171133",
  appId: "1:635760171133:web:c7bb96dbd5770218483914"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);