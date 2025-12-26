import express from "express";
import { pgPool } from "../db/postgres.js";
import { validateQuery } from "../services/queryValidator.js";

const router = express.Router();

router.post("/execute", async (req, res) => {
  const { query } = req.body;

  if (!validateQuery(query)) {
    return res.status(400).json({ error: "Only SELECT queries allowed" });
  }

  try {
    const result = await pgPool.query(query);
    res.json({ rows: result.rows });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
