import React from "react";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import Portifolio from "../../components/Portfolio";
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Portifolio />
      <Contacts />
    </Container>
  );
};

export default Home;
