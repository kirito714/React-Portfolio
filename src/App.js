import LandingPage from "./components/LandingPage"
import NavBar from "./components/pages"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <LandingPage/>
      </header>
    </div>
  );
}

export default App;
