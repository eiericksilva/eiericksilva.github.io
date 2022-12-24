import * as P from "./styles";
import CardRepo from "../cardRepo/index";

/* title, description, languages, technologies, libs  */
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
      />
      <CardRepo
        title="wiki-github"
        description="Projeto de uma wiki desenvolvido durante o Bootcamp da DIO (Digital Innovation One)"
        languages={projects.project2.languages}
        technologies={projects.project2.technologies}
        libs={projects.project2.libs}
      />
      <CardRepo
        title="pokeapi"
        description="Projeto realizado para consumo de API e criação da interface"
        languages={projects.project3.languages}
        technologies={projects.project3.technologies}
        libs={projects.project3.libs}
      />
    </P.Wrapper>
  );
};

export default Portifolio;
