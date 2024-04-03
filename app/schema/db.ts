import { boolean, pgTable, varchar } from "drizzle-orm/pg-core"

export const sample = pgTable("sample", {
  id: varchar("id", { length: 32 }).primaryKey(),
  test: boolean("test").default(false).notNull(),
})