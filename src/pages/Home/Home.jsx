import React from "react";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import Portifolio from "../../components/Portfolio";
import { Container } from "./Home.styles";
import MySkills from "../../components/MySkills";

const Home = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <MySkills />
      <Portifolio />
      <Contacts />
    </Container>
  );
};

export default Home;
