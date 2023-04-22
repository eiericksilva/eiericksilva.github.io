import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  width: 100%;
  padding: 20px 10px;
  background-color: #111111;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 56px;
    text-align: center;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
  }

  hr {
    width: 300px;
    text-align: center;
    opacity: 0.1;
    margin-bottom: 5px;
  }
`;

export const ContainerSkills = styled.div`
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
export const ContainerCard = styled.div`
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(135, 135, 135, 0.94);
  padding: 10px;
  margin: 0 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    transform: scale(1.1);
    transition: 0.7s;
  }

  h3 {
    font-size: 14px;
    font-family: "Raleway", sans-serif;
    padding: 10px 0;
  }

  img {
    width: 80px;
    backdrop-filter: blur(10px);
  }
  @media (max-width: 710px) {
    margin-bottom: 20px;
  }
`;
