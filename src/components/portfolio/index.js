import * as P from "./styles"

const Portifolio = () => {
  return (
    <P.Wrapper>
        <P.Header>
            <P.Title>Portfólio</P.Title>
            <P.SubTitle>O QUE EU TENHO FEITO</P.SubTitle>
        </P.Header>
        <P.Container>
                <P.Item><img src="images/calcedit.png" alt="" /></P.Item>
                <P.Item><img src="images/todoedit.png" alt="" /></P.Item>
                <P.Item> <img src="images/controleedit.png" alt=""/></P.Item>
        </P.Container>
    </P.Wrapper>
  )
}

export default Portifolio