export function validateQuery(sql) {
  const forbidden = ["INSERT", "UPDATE", "DELETE", "DROP", "ALTER"];
  const upper = sql.toUpperCase();

  for (let word of forbidden) {
    if (upper.includes(word)) {
      return false;
    }
  }
  return upper.trim().startsWith("SELECT");
}
