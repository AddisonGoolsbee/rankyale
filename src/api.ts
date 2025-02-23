import { collection, getDoc, doc, updateDoc, getDocs } from "firebase/firestore";
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

export const updateEntryScore = async (collectionName: string, id: string, newScore: number): Promise<boolean> => {
    const collectionRef = doc(db, "categories", collectionName, "entries", id);

    try {
        const collectionDoc = await getDoc(collectionRef);
        if (!collectionDoc.exists()) {
            console.error(`No college found with ID: ${id}`);
            return false;
        }

        await updateDoc(collectionRef, { score: newScore });

        console.log(`Updated college ${id}'s score to ${newScore}`);
        return true;
    } catch (error) {
        console.error("Error updating college score:", error);
        return false;
    }
};