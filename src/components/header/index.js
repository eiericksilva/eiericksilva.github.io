import * as H from "./styles";
import { Button } from "../Button";
import react from "../../assets/images/react.png";

const Header = () => {
  return (
    <>
      <H.Wrapper id="Inicio">
        <H.Main>
          <h2 className="main">OLÁ, ME CHAMO ERICK SILVA</h2>
          <h1 className="main">DESENVOLVEDOR DE SISTEMAS - MERN </h1>
          <p>
            Bem-vindo à minha página. Aqui você encontrará as minhas principais
            informações! Sou um profissional apaixonado por criar interfaces
            interativas e atraentes para a web e lidar com as regras de negócio
            do Sistema. Caso queira mais informações, clique no botão abaixo.
          </p>
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
