import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";





const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Resume/>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
