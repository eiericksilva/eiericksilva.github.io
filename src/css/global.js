import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFFFFF;
        font-family: "Poppins", sans-serif;
       /*  border: 1px solid yellow; */
    }
    html {
        scroll-behavior: smooth;
        width: 100%;
    }

    body {
        background-color: #0A1929;
    }
    
    h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 30px;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
