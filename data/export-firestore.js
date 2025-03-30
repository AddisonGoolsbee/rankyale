const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin with your service account
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function exportFirestore() {
  try {
    const collections = await db.listCollections();
    const data = {};

    for (const collection of collections) {
      const collectionName = collection.id;
      console.log(`Exporting collection: ${collectionName}`);
      
      const snapshot = await collection.get();
      const documents = {};
      
      snapshot.forEach(doc => {
        documents[doc.id] = doc.data();
      });
      
      data[collectionName] = documents;
    }

    // Create emulator-data directory if it doesn't exist
    const emulatorDataDir = path.join(__dirname, '..', 'emulator-data');
    if (!fs.existsSync(emulatorDataDir)) {
      fs.mkdirSync(emulatorDataDir);
    }

    // Write the data to a file
    fs.writeFileSync(
      path.join(emulatorDataDir, 'firestore_export.json'),
      JSON.stringify(data, null, 2)
    );

    console.log('Export completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error exporting Firestore data:', error);
    process.exit(1);
  }
}

exportFirestore(); 