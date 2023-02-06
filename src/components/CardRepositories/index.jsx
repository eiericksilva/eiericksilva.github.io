import React from "react";
import { Container, Header, Info } from "./styles";

const CardRepositories = ({
  title,
  description,
  languages,
  technologies,
  libs,
  children,
}) => {
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
      {children}
    </Container>
  );
};

export default CardRepositories;
