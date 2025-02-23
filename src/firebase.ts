import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5ALf922ZonYrURoAECZT_OWMPJwR1h8E",
    authDomain: "rankyale.firebaseapp.com",
    projectId: "rankyale",
    storageBucket: "rankyale.firebasestorage.app",
    messagingSenderId: "463872924342",
    appId: "1:463872924342:web:7266b4ff9f8b80eb73e417",
    measurementId: "G-L3PLKNTLJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

