import * as A from "./styles"
import { Button } from "../button/index"



const AboutMe = () => {
  return (
    <A.Wrapper id="SobreMim">
      <A.Container>
        <A.Info  className="SobreMim">
          <A.ContainerTitle>
            <A.SubTitle>Desenvolvedor Front-End Jr.</A.SubTitle>
            <A.Title> Sobre Mim</A.Title>
          </A.ContainerTitle>
          <A.Main>Olá, me chamo Erick Silva e estou cursando Análise e Desenvolvimento de Sistemas pela Faculdade Estácio de Sá. Tenho focado em me aperfeiçoar como Desenvolvedor Front-End através de alguns projetos pessoais que você pode ver aqui. Estou em busca da minha primeira oportunidade para ingressar no Mercado de Trabalho e fazer aquilo que descobri amar; resolver problemas e melhorar a experiência do usuário com as interfaces criadas através das linhas de código.</A.Main>
          
          <Button>
            <a href="https://drive.google.com/file/d/1qvbowVYDqnXZguF-TduByNURlw1z2x4L/view?usp=share_link" target={"_blank"} rel="noreferrer">BAIXAR CURRÍCULO</a>
          </Button>
        </A.Info>
        <A.WrapperPhoto>
          <A.BorderPhoto>
            <A.Photo src="/images/fotoPerfil.jpg"/>
          </A.BorderPhoto>
        </A.WrapperPhoto>
      </A.Container>
    </A.Wrapper>
  )
}

export default AboutMe
