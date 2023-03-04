import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #00060b;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  align-items: center;
  padding: 90px 70px;
  font-size: 1rem;
  text-align: left;
  width: 60%;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 30px;
    width: 100%;
  }
`;
export const ContainerTitle = styled.div`
  margin-bottom: 30px;
  background-color: #00060b;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.span`
  color: #ddd;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 20px;
  margin-bottom: 50px;
  margin-top: 15px;
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const WrapperPhoto = styled.div`
  width: 30%;
  position: relative;
  margin: 20px 90px 20px 0;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

export const BorderPhoto = styled.div`
  border: 1px solid #ffd1aa;
  padding: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    position: relative;
  }
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  line-height: 1.7rem;
`;
