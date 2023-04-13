import * as P from "./styles";
import CardRepositories from "../CardRepositories";
import { Button } from "../Button";

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

    project4: {
      languages: ["Javascript"],
      technologies: ["ReactJS"],
      libs: [
        "React hook form",
        "Yup",
        "Styled-Components",
        "Swiper",
        "MaterialUI",
        "React Awesome Reveal",
        "Vite",
      ],
    },

    project5: {
      languages: ["Wordpress"],
      technologies: ["WordPress"],
      libs: [
        "Elementor",
        "Editor Clássico",
        "Joinchat",
        "Royal Elementor Addons",
      ],
    },
  };

  return (
    <P.Wrapper id="Projetos">
      <h2 className="title">Cases de estudo</h2>
      <CardRepositories
        title="Açaí Delivery"
        description="Projeto de Delivery de açaí desenvolvido utilizando ReactJS"
        languages={projects.project1.languages}
        technologies={projects.project1.technologies}
        libs={projects.project1.libs}
      >
        <Button>
          <a
            href="https://acaidelivery.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Veja o Projeto
          </a>
        </Button>
      </CardRepositories>
      <CardRepositories
        title="Landing Page - Dermato"
        description="Aplicação desenvolvida em ReactJS para uma clínica dermatológica; onde ela apresenta seu portfólio de serviços e consegue captar os dados da pessoa que agendou uma consulta"
        languages={projects.project4.languages}
        technologies={projects.project4.technologies}
        libs={projects.project4.libs}
      >
        <Button>
          <a href="http://dermato.vercel.app/" target="_blank" rel="noreferrer">
            Veja o Projeto
          </a>
        </Button>
      </CardRepositories>
      <CardRepositories
        title="wiki-github"
        description="Projeto de uma wiki desenvolvido durante o Bootcamp da DIO (Digital Innovation One)"
        languages={projects.project2.languages}
        technologies={projects.project2.technologies}
        libs={projects.project2.libs}
      >
        <Button>
          <a
            href="https://wiki-github-inky.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Veja o Projeto
          </a>
        </Button>
      </CardRepositories>
      <CardRepositories
        title="Landing Page de Serviços Elétricos"
        description="Projeto desenvolvido em Wordpress para um prestador de serviços elétricos"
        languages={projects.project5.languages}
        technologies={projects.project5.technologies}
        libs={projects.project5.libs}
      >
        <Button>
          <a
            href="https://eiericksilva.com/escservicoseletricos/"
            target="_blank"
            rel="noreferrer"
          >
            Veja o Projeto
          </a>
        </Button>
      </CardRepositories>
    </P.Wrapper>
  );
};

export default Portifolio;
