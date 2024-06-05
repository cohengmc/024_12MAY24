import famDinner from "./assets/IMG_6272.JPG";
import famDinnerSelfie from "./assets/IMG_6275.JPG";
import parkSelfie1 from "./assets/IMG_6278.JPG";
import parkSelfie2 from "./assets/IMG_6600.JPG";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="app">
        <h1>12 May 2024</h1>
        <section>
          <h2>Fam Dinner with Shunshun and V!</h2>
          <div className="images">
            <img src={famDinner} alt="Cohen family dinner table with food" />
            <img
              src={famDinnerSelfie}
              alt="Cohen family dinner table selfie with food"
            />
            <img src={parkSelfie1} alt="Selfie with SS and V" />
            <img src={parkSelfie2} alt="Selfie with SS and V 2" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
