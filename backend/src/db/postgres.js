import pkg from "pg";
const { Pool } = pkg;

export const pgPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ciphersql_sandbox",
  password: "postgres",
  port: 5432,
});
