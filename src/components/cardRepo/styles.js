import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  padding: 70px;
  background-color: rgb(10, 10, 18);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    color: pink;
  }
  h1 {
    font-size: 3rem;
    margin: 5px 0;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
    }
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
