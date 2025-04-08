import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD5ALf922ZonYrURoAECZT_OWMPJwR1h8E",
    authDomain: "rankyale.firebaseapp.com",
    projectId: "rankyale",
    storageBucket: "rankyale.firebasestorage.app",
    messagingSenderId: "463872924342",
    appId: "1:463872924342:web:7266b4ff9f8b80eb73e417",
    measurementId: "G-L3PLKNTLJ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app);

// Only initialize analytics in browser environments
let analytics;
if (typeof window !== 'undefined') {
    isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}
export { analytics };

if (process.env.NODE_ENV === "development") {
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
}