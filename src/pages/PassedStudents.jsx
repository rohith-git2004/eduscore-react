import React, { useEffect, useState } from "react";
import { getStudents } from "../API/studentApi";

export default function PassedStudents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getStudents().filter(s => s.marks >= 35));
  }, []);

  return (
    <div className="container-lg py-4">
      <h2>Passed Students</h2>
      <ul className="list-group">
        {data.map(s => (
          <li key={s.id} className="list-group-item">{s.name} - {s.marks}</li>
        ))}
      </ul>
    </div>
  );
}
