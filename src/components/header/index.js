import * as H from "./styles";
import { Button } from "../Button";
import react from "../../assets/images/react.png";

const Header = () => {
  return (
    <>
      <H.Wrapper id="Inicio">
        <H.Main>
          <H.Subtitle className="main">OLÁ, ME CHAMO ERICK SILVA</H.Subtitle>
          <H.Title className="main">DESENVOLVEDOR FRONT-END</H.Title>
          <H.Description>
            Bem-vindo à minha página de desenvolvedor frontend! Sou um
            profissional apaixonado por criar interfaces interativas e atraentes
            para a web. Aqui você encontrará os principais projetos e
            Ferramentas que utilizo. Quer saber mais? Entre em contato comigo.
          </H.Description>
          <Button>
            <a href="#Contatos">FALE COMIGO</a>
          </Button>
          <img src={react} alt="Imagem react" />
        </H.Main>
      </H.Wrapper>
    </>
  );
};

export default Header;
