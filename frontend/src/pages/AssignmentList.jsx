import { useNavigate } from "react-router-dom";

export default function AssignmentList() {
  const navigate = useNavigate();

  return (
    <div className="assignment-list">
      <h2>SQL Assignments</h2>

      <div className="assignment-card">
        <h3>View All Students</h3>
        <p>Difficulty: Easy</p>
        <p>Write a SELECT query to view students</p>

        <button onClick={() => navigate("/assignment/1")}>
          Attempt Assignment
        </button>
      </div>
    </div>
  );
}
