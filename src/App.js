import React from "react";
import GlobalStyle from "./css/global";
import Header from "./components/header";
import AboutMe from "./components/aboutMe/index";
import Portifolio from "./components/portfolio";
import Contacts from "./components/contatos";
import { Footer } from "./components/footer";

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
