import * as I from "./styles";
import { IoLogoInstagram } from "react-icons/io"
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"


import React from 'react'

export const Footer = () => {
  return (
    <I.Wrapper id="RedesSociais">
        <I.Container >
            <IoLogoInstagram/>
            <AiFillLinkedin/>
            <AiFillGithub/>
        </I.Container>
        <I.Copy>Copyright - 2022 Desenvolvido por Erick Silva</I.Copy>
    </I.Wrapper>
  )
}
