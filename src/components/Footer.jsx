import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 w-100 mt-auto">
      © {new Date().getFullYear()} EduScore Portal. All rights reserved.
    </footer>
  );
}

export default Footer;
