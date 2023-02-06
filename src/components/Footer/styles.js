import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #202020;
  width: 100%;
  min-width: 1170px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export const Link = styled.a`
  width: 50px;
  height: 50px;

  svg {
    width: 40px;
    height: 40px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Copy = styled.p`
  font-size: 0.8rem;
`;
