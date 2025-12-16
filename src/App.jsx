import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import PassedStudents from "./pages/PassedStudents";
import FailedStudents from "./pages/FailedStudents";
import Results from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        
        <Header />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/students" element={<StudentDetails />} />
            <Route path="/passed" element={<PassedStudents />} />
            <Route path="/failed" element={<FailedStudents />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
