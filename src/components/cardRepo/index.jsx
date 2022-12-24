import React from "react";
import { Container, Header, Info } from "./styles";

const CardRepo = () => {
  return (
    <Container>
      <Header>
        <h1>wiki-github</h1>
        <p>Projeto desenvolvido durante Bootcamp da Digital Inovation One</p>
      </Header>
      <Info>
        <div>
          <h2>Linguagens:</h2>
          <ul>
            <li>Javascript</li>
          </ul>
        </div>
        <div>
          <h2>Tecnologias:</h2>
          <ul>
            <li>ReactJS</li>
          </ul>
        </div>
        <div>
          <h2>Bibliotecas:</h2>
          <ul>
            <li>Styled Components</li>
            <li>React hook forms</li>
            <li>Context API</li>
          </ul>
        </div>
      </Info>
    </Container>
  );
};

export default CardRepo;
