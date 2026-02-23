// rename-public.js
import fs from "fs";
import path from "path";

// paths
const publicDir = path.resolve("./public");
const docsDir = path.resolve("./docs");

// remove old docs if exists
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

// rename public -> docs
if (fs.existsSync(publicDir)) {
  fs.renameSync(publicDir, docsDir);
  console.log("Renamed 'public' → 'docs'");
} else {
  console.error("Error: 'public' folder not found. Build may have failed.");
}