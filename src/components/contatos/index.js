import * as C from "./styles"
import {Button} from '../button/index'

const Contacts = () => {
  return (
    <C.Wrapper id="Contatos">
        <C.Contacts className="Contatos">
            <C.Title>Meus Contatos</C.Title>
            <C.Text>Se interessou? Entre em contato comigo</C.Text>

            <C.SubTitle>Endereço</C.SubTitle>
            <C.Text>Pingo D'Água, Minas Gerais - Brasil</C.Text>

            <C.SubTitle>Telefone</C.SubTitle>
            <C.Text>027.99856-0967</C.Text>

            <C.SubTitle>Email</C.SubTitle>
            <C.Text>ericksilvaredes@gmail.com</C.Text>
        </C.Contacts>
        
        <C.wrapperButton>
          <Button>
            <a href="#Inicio">VOLTAR PARA O TOPO</a>
          </Button>
        </C.wrapperButton>
        
       
    </C.Wrapper>
  )
}

export default Contacts;