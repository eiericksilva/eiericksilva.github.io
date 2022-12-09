import styled from "styled-components"


export const Button = styled.button`
    font-family: "Oswald",sans-serif;

    width: auto;
    height: 50px;
    letter-spacing: 1px;
    padding: 0 30px;
    background-color: #fffafa ;
    border: 1px solid hsla(0,0%,40%,.8);
    margin-top: 20px;
    
    a {
        color: #091226;
        text-decoration: none;
        font-size: 1rem;
        line-height: 1.5;
    }

    &:hover {
            cursor: pointer;
            background-color: #191d3a;
            transition: .2s;
            
            a {
                color: #fffafa;
                transition: .2s;

            }
    } 
`;