import React, { useState, useEffect } from "react";
import { getStudents } from "../API/studentApi";

function FailedStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const failed = getStudents().filter((s) => Number(s.marks) < 35);
    setStudents(failed);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Failed Students</h2>
      <ul className="list-group">
        {students.map((s) => (
          <li key={s.id} className="list-group-item">
            {s.name} - {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FailedStudents;
