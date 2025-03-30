import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccountRaw from "../../serviceAccountKey.json" assert { type: "json" };
import { ServiceAccount } from "firebase-admin/app";
const serviceAccount = serviceAccountRaw;

initializeApp({
  credential: cert(serviceAccount as ServiceAccount)
});

export const db = getFirestore();
