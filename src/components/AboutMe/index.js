import * as A from "./styles";
import { Button } from "../Button";
import FotoPerfil from "../../assets/images/fotoPerfil.jpg";
import Resume from "../../assets/resume/CV_ERICKSILVA.pdf";

const AboutMe = () => {
  return (
    <A.Wrapper id="SobreMim">
      <A.Container>
        <A.Info className="SobreMim">
          <A.ContainerTitle>
            <A.Title>Sobre Mim</A.Title>
          </A.ContainerTitle>
          <A.Main>
            <p>
              Sou um estudante de Análise e Desenvolvimento de Sistemas(ADS).
              Faço freelancer na área de Desenvolvimento de Software
            </p>
            <p>
              Sou uma pessoa organizada e gosto de trabalhar em equipe, podendo
              colaborar para a resolução de problemas durante o desenvolvimento
              de sistemas. Meu objetivo é contribuir para a criação de produtos
              de qualidade que atendam às necessidades dos usuários.
            </p>
            <p>
              Sempre estou em busca de aprimorar minhas habilidades e aprender
              novas tecnologias. Fora do ambiente de trabalho, mantenho esse
              portfólio pessoal para mostrar meus projetos e habilidades. Caso
              queira entrar em contato comigo, fique à vontade para utilizar
              meus contatos que estão no final dessa página.Estou disponível
              para mais informações e oportunidades de trabalho.
            </p>
          </A.Main>

          <Button>
            <a download href={Resume} rel="noreferrer">
              DOWNLOAD CV
            </a>
          </Button>
        </A.Info>
        <A.WrapperPhoto>
          <A.BorderPhoto>
            <A.Photo src={FotoPerfil} />
          </A.BorderPhoto>
        </A.WrapperPhoto>
      </A.Container>
    </A.Wrapper>
  );
};

export default AboutMe;
