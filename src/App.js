import React from "react";
import GlobalStyle from "./css/global";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/index";
import Portifolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portifolio />
      <Contacts />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
