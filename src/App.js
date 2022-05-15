import React from "react"
import GlobalStyle from "./css/global";
import Header from "./components/header";
import AboutMe from "./components/aboutMe/index";
import Portifolio from "./components/portfolio";


function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portifolio/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
