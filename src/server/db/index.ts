import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";
 
config(); // Ensures .env is loaded

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set. Check your .env file.");
}
console.log("POSTGRES_URL in db/index.ts:", process.env.POSTGRES_URL);

const sql = neon(process.env.POSTGRES_URL!, { fetchOptions: { cache: "no-store" } });
export const db = drizzle(sql, { schema });
