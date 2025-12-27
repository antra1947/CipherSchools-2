import { useState } from "react";
import SQLEditor from "../components/SQLEditor";
import ResultTable from "../components/ResultTable";

export default function AssignmentAttempt() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

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
        setResult(data.rows);
        setError("");
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="assignment">
      {/* Question Panel */}
      <h2>Assignment: View All Students</h2>
      <p>Write a SELECT query to display all students.</p>

      {/* Sample Data */}
      <p><strong>Table:</strong> students</p>
      <p><strong>Columns:</strong> id, name, age, marks</p>

      {/* SQL Editor */}
      <SQLEditor query={query} setQuery={setQuery} />

      {/* Execute */}
      <button onClick={runQuery}>Execute</button>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Results */}
      <ResultTable data={result} />
    </div>
  );
}
