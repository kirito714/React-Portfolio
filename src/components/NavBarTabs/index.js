import React from "react";
import "./index.css";

// currentPage and HandlePageChange is coming from our LandingPage/index.js
function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // if current page is === Home using ternary operator

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // if current page is === About using ternary operator

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          // if current page is === projects using ternary operator

          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // if current page is === Resume using ternary operator

          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact"
          // if current page is === Contacts  using ternary operator

          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
