import pkg from "pg";
const { Pool } = pkg;

export const pgPool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
