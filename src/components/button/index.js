import styled from "styled-components";

export const Button = styled.button`
  font-family: "Oswald", sans-serif;
  position: relative;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  padding: 0 30px;
  background-color: #fffafa;
  border: 1px solid hsla(0, 0%, 40%, 0.8);
  margin-top: 20px;
  color: #191d3a;
  a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5;
    color: #191d3a;
  }

  &:hover {
    cursor: pointer;
    background-color: #0d98dd;
    transition: 0.3s;
    color: white;

    a {
      color: #ffffff;
      transition: 0.3s;
    }
  }

  /*   &::after {
    content: "";
    position: absolute;
    border: 1px solid #ffffff;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    top: -6px;
    right: -6px;
  } */
`;
