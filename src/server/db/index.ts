// src/server/db/index.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// Load environment variables
config();

// Debugging: Log POSTGRES_URL to ensure it's loaded
console.log("POSTGRES_URL in db/index.ts:", process.env.POSTGRES_URL);

// Validate POSTGRES_URL
if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set. Check your .env file.");
}

// Create the Neon HTTP client
const sql = neon(process.env.POSTGRES_URL, { fetchOptions: { cache: "no-store" } });

// Export the Drizzle ORM instance
export const db = drizzle(sql, { schema });