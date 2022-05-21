import styled from "styled-components"


export const Button = styled.button`
    font-family: "Oswald",sans-serif;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    padding: 0 30px;
    background-color: #080808;
    border: 1px solid hsla(0,0%,40%,.8);
    margin-top: 20px;

    a {
        text-decoration: none;
    }

    &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.98);
            transition: 0.5s;
    } 
`;