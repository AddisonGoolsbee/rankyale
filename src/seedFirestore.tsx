// src/seedFirestore.tsx
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { Entry, EntryData } from "./types";

const loadColleges = async (): Promise<EntryData[]> => {
    const response = await fetch("/src/data/colleges.json");
    if (!response.ok) {
        throw new Error("Failed to load colleges");
    }
    return (await response.json() as EntryData[])
}

const seedFirestore = async () => {
    const colleges = await loadColleges();
    const categoriesRef = collection(db, "categories");
    const collegesRef = doc(categoriesRef, "colleges");

    const formattedColleges: Entry[] = colleges.map((college) => ({
        ...college,
        score: 1000,
        popularity: 1000,
    }));

    await setDoc(collegesRef, { data: formattedColleges });

    console.log("Firestore seeded successfully!");
};

seedFirestore().catch(console.error);
