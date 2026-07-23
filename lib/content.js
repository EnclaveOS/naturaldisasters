import fs from "node:fs";
import path from "node:path";

const homePagePath = path.join(process.cwd(), "content", "pages", "index.json");

export function getHomePage() {
  const file = fs.readFileSync(homePagePath, "utf8");
  return JSON.parse(file);
}
