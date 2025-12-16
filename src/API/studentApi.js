const KEY = "students";

export const getStudents = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const addStudent = (student) => {
  const students = getStudents();
  students.push({
    ...student,
    id: Date.now(),
    marks: student.marks === "" ? "AB" : student.marks
  });
  localStorage.setItem(KEY, JSON.stringify(students));
};

export const updateStudent = (id, updated) => {
  const students = getStudents().map((s) =>
    s.id === id
      ? { ...s, ...updated, marks: updated.marks === "" ? "AB" : updated.marks }
      : s
  );
  localStorage.setItem(KEY, JSON.stringify(students));
};

export const deleteStudent = (id) => {
  const students = getStudents().filter((s) => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(students));
};
