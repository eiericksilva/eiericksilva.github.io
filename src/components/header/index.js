import * as H from "./styles"
import React from 'react'
import { CgMenuGridR } from "react-icons/cg"

const Header = () => {
  return (
    <>
        <H.Wrapper>
            <H.ContainerMenu>
              <div></div>
              <CgMenuGridR/>
            </H.ContainerMenu>
            <H.Main>
                <H.Subtitle>EU ME CHAMO ERICK SILVA</H.Subtitle>
                <H.Title>DESENVOLVEDOR FRONT-END</H.Title>
                <H.Button>FALE COMIGO</H.Button>
            </H.Main>
        </H.Wrapper>
    </>
  )
}

export default Header;


