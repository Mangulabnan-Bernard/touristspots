import { sql } from "drizzle-orm";
import {
  index,
  integer, 
  pgTableCreator,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

// Dynamic table prefix
export const createTable = pgTableCreator((name) => `gallery_${name}`);

// Define the 'images' table
export const images = createTable(
  "images",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    isPrivate: boolean("is_private").default(false).notNull(), 
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);