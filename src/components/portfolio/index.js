import * as P from "./styles";
import CardRepo from "../cardRepo/index";
import { Button } from "../button";

const Portifolio = () => {
  const projects = {
    project1: {
      languages: ["Javascript"],
      technologies: ["ReactJS"],
      libs: ["styled-components"],
    },
    project2: {
      languages: ["Javascript"],
      technologies: ["ReactJS"],
      libs: ["axios", "styled-components"],
    },
    project3: {
      languages: ["Javascript"],
      technologies: ["ReactJS"],
      libs: ["fetchapi", "context-api", "localStorage"],
    },
  };

  return (
    <P.Wrapper id="Projetos">
      <h1 className="title">Projetos</h1>
      <CardRepo
        title="Calculadora ReactJS"
        description="Projeto de uma calculadora desenvolvido durante o Bootcamp da DIO (Digital Innovation One"
        languages={projects.project1.languages}
        technologies={projects.project1.technologies}
        libs={projects.project1.libs}
      >
        <a
          href="https://calc-react-nu.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Veja o Projeto</Button>
        </a>
      </CardRepo>
      <CardRepo
        title="wiki-github"
        description="Projeto de uma wiki desenvolvido durante o Bootcamp da DIO (Digital Innovation One)"
        languages={projects.project2.languages}
        technologies={projects.project2.technologies}
        libs={projects.project2.libs}
      >
        <a
          href="https://wiki-github-inky.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Veja o Projeto</Button>
        </a>
      </CardRepo>
      <CardRepo
        title="pokeapi"
        description="Projeto realizado para consumo de API e criação da interface"
        languages={projects.project3.languages}
        technologies={projects.project3.technologies}
        libs={projects.project3.libs}
      >
        <a
          href="https://pokeapi-topaz-seven.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Veja o Projeto</Button>
        </a>
      </CardRepo>
    </P.Wrapper>
  );
};

export default Portifolio;
