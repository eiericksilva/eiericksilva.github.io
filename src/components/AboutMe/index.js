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
            Olá, me chamo Erick Silva e estou cursando Análise e Desenvolvimento
            de Sistemas pela Faculdade Estácio de Sá. Tenho focado em me
            aperfeiçoar como Desenvolvedor Front-End através de alguns projetos
            pessoais que você pode ver aqui. Sou uma pessoa organizada e gosto
            de trabalhar em equipe, podendo assim colaborar para a resolução de
            problemas durante o desenvolvimento de sistemas. Me coloco a
            disposição para mais informações.
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
