import React, { useState } from "react";
import NavBarTabs from "../NavBarTabs";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Card from "../Card/index.js";
import "./index.css";

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState("Home");

  // renderPage() thats returns our components from the selection from the OnClick user event.
  // home === home then return home.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // were passing the props of user OnClick selection of the page they clicked*/}
      <NavBarTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* calling the renderPage()*/}
      <Card currentPage={renderPage()} />

      {/* {renderPage()} */}
    </div>
  );
}
