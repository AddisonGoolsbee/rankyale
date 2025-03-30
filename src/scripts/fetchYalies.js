// run with node -r dotenv/config src/scripts/fetchYalies.js

import fs from "fs";
import path from "path";

const YALIES_API_KEY = process.env.YALIES_API_KEY;
if (!YALIES_API_KEY) {
  console.error("Missing YALIES_API_KEY in environment.");
  process.exit(1);
}

const yaliesURL = "https://api.yalies.io/v2/people";

async function fetchAllYalies() {
  const allStudents = [];
  let page = 0;
  let more = true;

  while (more) {
    const response = await fetch(yaliesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${YALIES_API_KEY}`,
      },
      body: JSON.stringify({
        page,
        filters: { school: "Yale College" },
      }),
    });

    if (!response.ok) {
      console.error("Yalies API error:", await response.text());
      process.exit(1);
    }

    const data = await response.json();
    if (data.length === 0) {
      more = false;
    } else {
      for (const person of data) {
        const name = `${person.first_name || ""} ${person.last_name || ""}`.trim();
        allStudents.push({
          name,
          email: person.email,
          image: person.image || "assets/defaultStudent.avif",
          class_year: person.year,
        });
      }

      page++;
      const lastYear = data[data.length - 1]?.year || "unknown";
      console.log(`Fetched page ${page} — Total: ${allStudents.length} (last year: ${lastYear})`);
    }
  }

  const outputPath = path.join("src", "data", "students.json");
  fs.mkdirSync("data", { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(allStudents, null, 2));
  console.log(`✅ Saved ${allStudents.length} students to ${outputPath}`);
}

fetchAllYalies();
