import React from "react";
import LandingPage from "./components/LandingPage";
import MyImage from "./components/MyImage";

function App() {
  return (
    <div>
      <header>
        <MyImage/>
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
