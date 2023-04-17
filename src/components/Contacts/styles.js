import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #202020;
  width: 100%;
  min-height: 300px;
  padding: 50px 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    align-items: start;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
  line-height: 1.2;
`;
export const SubTitle = styled.h3`
  margin-bottom: 2px;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: left;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 1px;
  color: #bbb;
  line-height: 20px;
  margin-bottom: 1.5rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 10px;
  }
`;
