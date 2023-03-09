import React from "react";
import Post from "../../components/Post/Post";
import { ContainerPosts, Wrapper } from "./Blog.styles";
import Banner from "../../assets/images/banner.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";

const Blog = () => {
  return (
    <Wrapper>
      <SearchBar />
      <ContainerPosts>
        <Wrapper>
          <Post
            bannerPost={Banner}
            title="Estilizando Componentes ReactJS com base nas props"
            subtitle="Já imaginou poder personalizar a aparência de um botão no seu site ou aplicativo com base em diferentes estados de desabilitação condicional? Neste artigo, você aprenderá duas maneiras de controlar condicionalmente o estado de componentes em ReactJS, permitindo que você desabilite botões e customize a aparência visual com facilidade."
            name="Erick Silva"
            date=" 09 de março de 2023"
          />
        </Wrapper>
      </ContainerPosts>
    </Wrapper>
  );
};

export default Blog;
