import React from "react";
import Header from "./Components/Header/Header.js";
import First from "./Components/First-Section/First";
import Second from "./Components/Second-Section/Second.js";
import Third from "./Components/Third-Section/Third.js";
import Fourth from "./Components/Fourth-Section/Fourth.js";
import Fifth from "./Components/Fifth-Section/Fifth.js";
import Sixth from "./Components/Sixth-Section/Sixth.js";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert-Section/Alert";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/commonResource/css/styles.css";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
    </>
  );
}

export default App;
