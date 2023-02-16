import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  height: auto;
  padding: 70px;
  border-radius: 15px;
  background-color: #001e3c;
  border: 1px solid #26435f;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  p {
    font-size: 1.2rem;
    color: #f2f2f2;
  }
  h1 {
    font-size: 2rem;
    margin: 5px 0;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 10px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul {
      padding-bottom: 10px;
      li {
        list-style: none;
        &::before {
          content: "🔥";
          margin-right: 10px;
        }
      }
    }
  }
`;
