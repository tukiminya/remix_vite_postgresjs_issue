import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "~/schema/db"

const connection = (env: Env) => postgres(env.DB_URI)
export const db = (env: Env) => {
  console.debug("DB function called")
  return drizzle(connection(env), { schema })
}