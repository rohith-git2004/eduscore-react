import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-wrapper d-flex align-items-center justify-content-center">
      <div className="container text-center">

        <h1 className="display-4 fw-bold mb-3">
          EduScore Portal
        </h1>

        <p className="lead text-muted mb-4">
          Track student performance including Passed, Failed, and Absent students.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/students" className="btn btn-outline-primary btn-lg">
            Manage Students
          </Link>

          <Link to="/results" className="btn btn-primary btn-lg">
            View Results
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
