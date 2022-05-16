import React, {useEffect} from "react"
import GlobalStyle from "./css/global";
import Header from "./components/header";
import AboutMe from "./components/aboutMe/index";
import Portifolio from "./components/portfolio";
import Contacts from "./components/contatos";
import { Footer } from "./components/footer";
import scrollreveal from "scrollreveal";




function App() {
  useEffect(() => {
    const sr = scrollreveal({
      delay:"100",
      origin:"left",
      distance:"500px",
      duration: 2000,
      reset: true,
    })
    sr.reveal(
      `
      .logo,
      .main,
      .SobreMim,
      .Title,
      .SubTitle,
      .Projetos,
      .Contatos
      `
    )
  }, []);
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portifolio/>
      <Contacts/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
