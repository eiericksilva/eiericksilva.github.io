import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFFFFF;
        font-family: 'Heebo', sans-serif;
    }
    html {
        scroll-behavior: smooth;
        width: 100%;
    }

    h1 {
        font-size: 4rem;
        letter-spacing: 4px;
        font-weight: 700;
        font-family: "Oswald",sans-serif;
        line-height: 1.2;
        margin-bottom: 30px;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 8px;
        font-family: "Oswald",sans-serif;
    }

    p {
        font-weight: 100;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
