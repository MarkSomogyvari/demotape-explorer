import fs from "fs";
import path from "path";

const source = path.resolve("content");
const dest = path.resolve("quartz/static/maps/content");

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(source, dest, { recursive: true });

console.log("✔ Map content synced");