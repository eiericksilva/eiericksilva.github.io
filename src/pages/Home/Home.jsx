import React from "react";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import Portifolio from "../../components/Portfolio";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <AboutMe />
      <Portifolio />
      <Contacts />
    </div>
  );
};

export default Home;
