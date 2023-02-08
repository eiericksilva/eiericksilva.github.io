import React, { useEffect } from "react";
import { Container } from "./MenuMobile.styles";
import { AiOutlineClose } from "react-icons/ai";
const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
    setTimeout(() => {
      setMenuIsVisible(false);
    }, 10000);
  }, [menuIsVisible, setMenuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <AiOutlineClose size={25} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="#Inicio">INÍCIO</a>
        <a href="#SobreMim">SOBRE MIM</a>
        <a href="#Projetos">PORTFÓLIO</a>
        <a href="#Contatos">CONTATOS</a>
        <a href="#RedesSociais">REDES SOCIAIS</a>
      </nav>
    </Container>
  );
};

export default MenuMobile;
