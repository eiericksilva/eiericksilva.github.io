import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ffffff;
  align-items: center;

  input {
    width: 80%;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: white;
    }
  }

  span {
    z-index: 10;
    right: 140px;
    top: 9px;
    cursor: pointer;
    margin-top: 10px;
  }
`;
