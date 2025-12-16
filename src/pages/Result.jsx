import React, { useEffect, useState } from "react";
import { getStudents } from "../API/studentApi";

function Results() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const getStatus = (marks) => {
    if (marks === "AB") return "ABSENT";
    if (Number(marks) >= 35) return "PASSED";
    return "FAILED";
  };

  const filteredStudents = students.filter((s) => {
    const status = getStatus(s.marks);
    return filter === "ALL" || status === filter;
  });

  return (
    <div className="container-lg py-4">
      <h2 className="mb-4">Student Results</h2>

      {/* FILTER */}
      <div className="mb-3">
        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">All Students</option>
          <option value="PASSED">Passed</option>
          <option value="FAILED">Failed</option>
          <option value="ABSENT">Absent</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => {
                const status = getStatus(s.marks);
                return (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.marks}</td>
                    <td>
                      <span
                        className={`badge ${
                          status === "PASSED"
                            ? "bg-success"
                            : status === "FAILED"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
