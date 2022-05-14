import React from "react"
import GlobalStyle from "./css/global";
import Header from "./components/header";
import AboutMe from "./components/aboutMe/index";


function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
