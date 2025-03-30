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