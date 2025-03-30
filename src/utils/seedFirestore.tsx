// src/seedFirestore.tsx
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { EntryData } from "./types";

const loadCollection = async (collectionName: string): Promise<EntryData[]> => {
  const response = await fetch(`/src/data/${collectionName}.json`);
  if (!response.ok) {
    throw new Error("Failed to load data from JSON file");
  }
  return (await response.json()) as EntryData[];
};

const seedFirestore = async () => {
  const collectionName = "colleges";
  const colleges = await loadCollection(collectionName);

  const entriesRef = collection(db, "categories", collectionName, "entries");

  for (const college of colleges) {
    const entryRef = doc(entriesRef);
    await setDoc(entryRef, {
      ...college,
      score: 1000,
      popularity: 1000,
    });
  }

  console.log("Firestore seeded successfully!");
};

seedFirestore().catch(console.error);
