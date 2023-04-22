import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #111111;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 150px 70px;
  position: relative;

  p {
    font-size: 24px;
    margin-bottom: 20px;
  }
  img {
    position: absolute;
    opacity: 5%;
    right: 50px;
    top: 50px;
    width: 600px;
    height: 600px;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 500px;
      height: 500px;
      right: 50px;
      top: -30px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;

    h1 {
      font-size: 46px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;
