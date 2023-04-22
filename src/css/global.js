import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFFFFF;
        font-family: "Raleway", sans-serif;
    }

    :root {
        --color-white: #FFFFFF;
        --color-grey-tabby: #616161;
        --color-midnight-gray: #444444;
        --color-tank-grey: #333333;
        --color-graphit: #202020;
        --color-cinza: #111111;
        --color-cinza_plus: #262626;
    }
    
    html {
        scroll-behavior: smooth;
        width: 100%;
    }

    body {
        background-color: #0A1929;
        
    }
    
    h1 {
        font-size: 56px;
        font-weight: 700;
        margin-bottom: 30px;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 10px;
    }

    h2 {
        font-size: 32px;
        font-weight: 400;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 5px;
    }

    h3 {
        font-size: 60px;
        font-weight: 400;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 5px;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
