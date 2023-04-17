import * as C from "./styles";

const Contacts = () => {
  return (
    <C.Wrapper id="Contatos">
      <C.ContainerInfo>
        <C.Title>Meus Contatos</C.Title>
        <C.Text>Se interessou? Entre em contato comigo</C.Text>
      </C.ContainerInfo>
      <C.ContainerInfo>
        <C.SubTitle>Endereço</C.SubTitle>
        <C.Text>Pingo D'Água, Minas Gerais - Brasil</C.Text>
      </C.ContainerInfo>
      <C.ContainerInfo>
        <C.SubTitle>WhatsApp</C.SubTitle>
        <C.Text>(33) 99950-1882</C.Text>
      </C.ContainerInfo>
      <C.ContainerInfo>
        <C.SubTitle>Email</C.SubTitle>
        <C.Text>ericksilvaredes@gmail.com</C.Text>
      </C.ContainerInfo>
    </C.Wrapper>
  );
};

export default Contacts;
