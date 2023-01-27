import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavBar from "./components/navBar/NavBar";
import NavBarMob from "./components/navBarMob/NavBarMob";
import "./CSS/style.css";

function App() {
  return (
    <div className="App">
      <NavBarMob />

      <NavBar />

      <Header />

      <Main />s
    </div>
  );
}

export default App;
