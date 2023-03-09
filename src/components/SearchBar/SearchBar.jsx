import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Container } from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <Container>
      <input type="search" placeholder="Pesquisar" />
      <span>
        <BiSearchAlt2 size={25} />
      </span>
    </Container>
  );
};

export default SearchBar;
