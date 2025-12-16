import React, { useEffect, useState } from "react";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../API/studentApi";

function StudentDetails() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", marks: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (editId) {
    updateStudent(editId, form);

    alert("Student details updated successfully!");
  } else {
    addStudent(form);

    alert("Student added successfully!");
  }

  setForm({ name: "", marks: "" });

  setEditId(null);

  setStudents(getStudents());
};


  const handleEdit = (student) => {
    setForm({
      name: student.name,
      marks: student.marks === "AB" ? "" : student.marks,
    });
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    deleteStudent(id);
    setStudents(getStudents());
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-lg py-4">
      <h2 className="mb-4">Student Details</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Marks (leave empty for AB)"
            value={form.marks}
            onChange={(e) => setForm({ ...form, marks: e.target.value })}
          />
        </div>

        <div className="col-md-2 d-grid">
          <button className="btn btn-primary">
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => {
                const status =
                  s.marks === "AB"
                    ? "ABSENT"
                    : Number(s.marks) >= 35
                    ? "PASSED"
                    : "FAILED";

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
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(s)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(s.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
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

export default StudentDetails;
