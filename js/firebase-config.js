// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Konfigurasi Firebase Anda
// GANTI DENGAN DATA PROJECT ANDA DI FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyARWeAhj8vNXTeDwDe1a15hm-uzhPPwjC0",
  authDomain: "monitoring-iot-6daae.firebaseapp.com",
  databaseURL: "https://monitoring-iot-6daae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-iot-6daae",
  storageBucket: "monitoring-iot-6daae.firebasestorage.app",
  messagingSenderId: "557598750439",
  appId: "1:557598750439:web:8d70d77ecabf46fdce5442",
  measurementId: "G-DS2YLLDFHM"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth untuk digunakan di file lain
export { auth, signInWithEmailAndPassword, onAuthStateChanged };