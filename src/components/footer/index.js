import * as I from "./styles";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";

export const Footer = () => {
  return (
    <I.Wrapper id="RedesSociais">
      <I.Container className="ContainerIcons">
        <I.Icon>
          <I.Link
            href="https://www.instagram.com/eiericksilva.dev/"
            target="_blank"
          >
            <IoLogoInstagram />
          </I.Link>
        </I.Icon>
        <I.Icon>
          <I.Link
            href="https://www.linkedin.com/in/eiericksilva/"
            target="_blank"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </I.Link>
        </I.Icon>
        <I.Icon>
          <I.Link href="https://github.com/eiericksilva" target="_blank">
            <AiFillGithub></AiFillGithub>
          </I.Link>
        </I.Icon>
      </I.Container>
      <I.Copy>Copyright - 2022 Desenvolvido por Erick Silva</I.Copy>
    </I.Wrapper>
  );
};
