import React from "react";
import { Container, Header, Info, ContainerButton } from "./styles";
import { Button } from "../button/index";

const CardRepo = ({ title, description, languages, technologies, libs }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <p>{description}</p>
      </Header>
      <Info>
        <div>
          <h2>Linguagens:</h2>
          {languages.map((lang, index) => (
            <ul key={index}>
              <li>{lang}</li>
            </ul>
          ))}
        </div>
        <div>
          <h2>Tecnologias:</h2>
          <ul>
            {technologies.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Bibliotecas:</h2>
          <ul>
            {libs.map((lib) => (
              <li>{lib}</li>
            ))}
          </ul>
        </div>
      </Info>
      <ContainerButton>
        <Button>Acessar Repo</Button>
        <Button>Ver Projeto</Button>
      </ContainerButton>
    </Container>
  );
};

export default CardRepo;
