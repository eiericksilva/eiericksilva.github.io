import * as P from "./styles"

const Portifolio = () => {
  return (
    <P.Wrapper id="Projetos">
        <P.Header>
            <P.Title className="Title">Portfólio</P.Title>
            <P.SubTitle className="SubTitle">O QUE EU TENHO FEITO</P.SubTitle>
        </P.Header>
        <P.Container className="Projetos">
                <P.Item><img src="images/calcedit.png" alt="Calculadora" /></P.Item>
                <P.Item><img src="images/todoedit.png" alt="ToDo List" /></P.Item>
                <P.Item> <img src="images/controleedit.png" alt="Controle de Finanças"/></P.Item>
                <P.Item> <img src="images/cepedit.png" alt="Buscador de endereço"/></P.Item>
                <P.Item> <img src="images/netflixedit.png" alt="Netflix"/></P.Item>
        </P.Container>
    </P.Wrapper>
  )
}

export default Portifolio