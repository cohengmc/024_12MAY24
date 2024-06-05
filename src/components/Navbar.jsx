import geoffIcon from "../assets/geoff_character.gif";
import "./Navbar.css";

function App() {
  return (
    <>
      <div id="header">
        <a href="https://coding-creations-gmc.netlify.app">
          <img
            src={geoffIcon}
            alt="A cartoon caricature of Geoff with a smirk and peace sign that shakes back and forfth"
          />
        </a>
        <div id="header-text">
          <h1>Geoff Travels</h1>
        </div>
        <ul id="taskbar">
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="https://github.com/cohengmc" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
