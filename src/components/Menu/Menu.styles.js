import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #020e1b;
  backdrop-filter: blur(3px);
  z-index: 10;
  top: 0;

  svg {
    display: none;
  }

  @media (max-width: 960px) {
    .menu {
      display: none;
    }

    svg {
      display: block;
    }
  }
`;
export const Logo = styled.h3`
  font-family: "Great Vibes", cursive;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5em;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: auto;
`;
export const Item = styled.li`
  padding: 10px;
  color: white;
  list-style: none;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  color: white;
  font-size: 1em;
  font-weight: 300;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
    background-color: #142e47;
    color: #f2f2f2;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
