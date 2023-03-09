import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #142e47;
  min-height: 200px;
  width: 80%;
  margin: 0 auto;

  display: flex;
  box-shadow: 1px 1px 4px black;
  cursor: pointer;
`;

export const ContainerLeft = styled.div`
  padding: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  letter-spacing: 1px;
  line-height: 1.3;
  h1 {
    color: #fff;
    font-size: 19px;
    font-weight: 700;
  }

  h2 {
    color: #f2f2f2;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const ContainerRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 280px;
    padding: 10px;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostInfo = styled.div`
  p {
    font-weight: 100;
    margin-bottom: 5px;
  }
`;
