import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #202020;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  align-items: center;
  padding: 20px;
  font-size: 1rem;
  text-align: left;
  min-width: 800px;
  width: 60%;

  @media (max-width: 1300px) {
    align-items: flex-start;
    padding: 30px;
    width: 100%;
    min-width: 0;
  }
`;
export const ContainerTitle = styled.div`
  margin-bottom: 30px;
  background-color: transparent;

  @media (max-width: 1300px) {
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.span`
  color: #ddd;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const Title = styled.h1`
  padding-bottom: 20px;
  margin: 15px 0 50px 0;

  @media (max-width: 1300px) {
    margin-bottom: 10px;
  }
`;

export const WrapperPhoto = styled.div`
  width: 470px;
  position: relative;
  margin: auto 20px;

  @media (max-width: 1300px) {
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const Photo = styled.img`
  width: 70%;
  object-fit: cover;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  line-height: 1.7rem;
`;
