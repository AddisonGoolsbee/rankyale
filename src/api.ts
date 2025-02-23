import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Entry } from "./types";

export const getColleges = async (): Promise<Entry[]> => {
    const collegesDoc = await getDoc(doc(collection(db, "categories"), "colleges"));
    if (!collegesDoc.exists()) return [];

    const data = collegesDoc.data().data as Entry[]; // Extract array from Firestore document
    return data;
};
