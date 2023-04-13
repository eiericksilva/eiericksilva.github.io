import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 713px;
  background-color: #142e47;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  max-width: 80%;
  margin-bottom: 20px;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 150px 70px;
  position: relative;

  img {
    position: absolute;
    opacity: 10%;
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
  }
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 4px;
  }
`;

export const Subtitle = styled.h2`
  @media (max-width: 768px) {
    font-size: 0.6rem;
    letter-spacing: 6px;
  }
`;
