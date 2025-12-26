import { useState } from "react";
import SQLEditor from "../components/SQLEditor";
import ResultTable from "../components/ResultTable";

export default function AssignmentAttempt() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  // 🔹 STEP 13 CODE GOES HERE
  const runQuery = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/query/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setResult([]);
      } else {
        setResult(data.rows || []);
        setError("");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="assignment">
      <h2>Assignment: Find Students</h2>

      <SQLEditor query={query} setQuery={setQuery} />

      <button onClick={runQuery}>Execute Query</button>

      {error && <p className="error">{error}</p>}

      <ResultTable data={result} />
    </div>
  );
}
