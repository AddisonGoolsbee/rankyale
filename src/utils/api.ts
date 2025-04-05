import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Entry } from "./types";

export const getCollection = async (collectionName: string): Promise<Entry[]> => {
    const entriesRef = collection(db, "categories", collectionName, "entries");

    try {
        const querySnapshot = await getDocs(entriesRef);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Entry));
    } catch (error) {
        console.error(`Error retrieving collection ${collectionName}:`, error);
        return [];
    }
};

export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Request timed out"));
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timeout);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timeout);
        reject(err);
      });
  });
}
