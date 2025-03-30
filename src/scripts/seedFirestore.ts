import { db } from "../utils/firebase";
import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..", "..", "..");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

const loadCollection = async (collectionName: string) => {
  console.log(`Loading ${collectionName} from JSON file...`);
  const filePath = join(__dirname, "src", "data", `${collectionName}.json`);
  const fileContent = await readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  console.log(`Loaded ${Object.keys(data).length} entries from JSON`);
  return data;
};

const seedFirestore = async (collectionName: string) => {
  // Check if we're in development mode
  if (process.env.NODE_ENV !== "development") {
    console.error("⚠️  WARNING: Not in development mode!");
    console.error("This script should only be run against the emulator.");
    console.error("Set NODE_ENV=development before running this script.");
    process.exit(1);
  }

  // Confirm with user before proceeding
  console.log("\n🔍 Safety Check:");
  console.log("1. You are running this against the Firebase emulator");
  console.log("2. The emulator is running on localhost:8080");
  console.log("3. This will write to the emulator database, not production");
  
  const answer = await question("\nDo you want to proceed? (yes/no): ");
  if (answer.toLowerCase() !== "yes") {
    console.log("Operation cancelled.");
    process.exit(0);
  }

  console.log(`\nStarting to seed ${collectionName}...`);
  const entries = await loadCollection(collectionName);
  const entriesRef = collection(db, "categories", collectionName, "entries");

  // First, check existing documents
  const existingDocs = await getDocs(entriesRef);
  console.log(`Found ${existingDocs.size} existing documents`);

  let count = 0;
  let batch = writeBatch(db);
  let batchCount = 0;
  const BATCH_SIZE = 500; // Firestore allows up to 500 operations per batch

  for (const entry of entries) {
    const docId = entry.email;
    const entryRef = doc(entriesRef, docId);
    
    batch.set(entryRef, {
      ...entry,
      score: 1000,
      popularity: 1000,
    }, { merge: true });
    
    batchCount++;
    count++;

    // Commit the batch when it reaches the size limit
    if (batchCount === BATCH_SIZE) {
      await batch.commit();
      console.log(`Processed ${count} entries...`);
      batch = writeBatch(db);
      batchCount = 0;
    }
  }

  // Commit any remaining operations
  if (batchCount > 0) {
    await batch.commit();
  }

  console.log("Firestore seeded successfully!");
  rl.close();
  process.exit(0);
};

console.log("Script starting...");
seedFirestore("students").catch(error => {
  console.error("Error:", error);
  rl.close();
  process.exit(1);
}); 