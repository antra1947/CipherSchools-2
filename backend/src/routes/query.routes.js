import express from "express";
import { pgPool } from "../db/postgres.js";
import { validateQuery } from "../services/queryValidator.js";

const router = express.Router();

router.post("/execute", async (req, res) => {
  const query = req.body?.query;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  if (!validateQuery(query)) {
    return res.status(400).json({ error: "Only SELECT queries allowed" });
  }

  try {
    const result = await pgPool.query(query);
    res.json({ rows: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
