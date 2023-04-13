import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #00060b;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  border: 1px solid red;
`;

export const Icon = styled.div``;

export const Link = styled.a`
  svg {
    width: 50px;
    height: 50px;

    :hover {
      cursor: pointer;
      transform: scale(1.6);
      transform: translateY(-10px);

      z-index: 10;
    }
  }
`;

export const Copy = styled.p`
  font-size: 0.8rem;
`;
