import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #202020;
  width: 100%;
  height: auto;
  padding: 30px 70px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  .title {
    font-size: 4rem;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
