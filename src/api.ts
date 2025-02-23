import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Entry } from "./types";

export const getColleges = async (): Promise<Entry[]> => {
    const collegesDoc = await getDoc(doc(collection(db, "categories"), "colleges"));
    if (!collegesDoc.exists()) return [];

    const data = collegesDoc.data().data as Entry[]; // Extract array from Firestore document
    return data;
};

export const updateCollegeScore = async (collegeName: string, newScore: number): Promise<boolean> => {
    const collegesRef = doc(db, "categories", "colleges");

    try {
        const collegesDoc = await getDoc(collegesRef);
        if (!collegesDoc.exists()) {
            console.error("Colleges document does not exist.");
            return false;
        }

        // Extract existing colleges
        const colleges = collegesDoc.data().data as Entry[];

        // Find the college entry to update
        const updatedColleges = colleges.map((college) =>
            college.name === collegeName ? { ...college, score: newScore } : college
        );

        // Update Firestore
        await updateDoc(collegesRef, { data: updatedColleges });

        console.log(`Updated ${collegeName}'s score to ${newScore}`);
        return true;
    } catch (error) {
        console.error("Error updating college score:", error);
        return false;
    }
};