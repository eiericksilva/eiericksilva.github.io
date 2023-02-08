import styled from "styled-components";

export const Button = styled.button`
  font-family: "Oswald", sans-serif;
  position: relative;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  padding: 0 30px;
  background-color: #fffafa;
  margin-top: 20px;
  border-radius: 15px;
  border: none;

  a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5;
    color: #191d3a;
    z-index: 5;
  }

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #ffd1aa;
    color: #000000;
  }
`;
