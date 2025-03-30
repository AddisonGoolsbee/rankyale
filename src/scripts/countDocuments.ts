import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const countDocuments = async () => {
  console.log("Counting documents in /categories/students/entries...");
  const entriesRef = collection(db, "categories", "students", "entries");
  const snapshot = await getDocs(entriesRef);
  console.log(`Total number of documents: ${snapshot.size}`);
  process.exit(0);
};

countDocuments().catch(error => {
  console.error("Error:", error);
  process.exit(1);
}); 