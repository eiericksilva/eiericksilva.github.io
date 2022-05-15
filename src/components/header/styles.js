import styled from "styled-components"


export const Wrapper = styled.div`
    width: 100vw;
    height: 713px;
    background-color: #080808;
`;

export const ContainerMenu = styled.div`
    background-color: #080808;
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid #FFD1AA ;

    svg {
        width: 60px;
        height: 60px;
        margin: auto 30px;
        opacity: 1;

        &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.5);
            transition: 0.5s;
        }
        
    }
`;

export const Main = styled.main`
    background-color: #080808;
    width: 80%;
    padding: 150px 70px;
    margin: 100px 0;
`;

export const Subtitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 8px;
    
`;

export const Title = styled.h2`
    font-size: 4rem;
    letter-spacing: 4px;
    font-weight: 700;
    font-family: "Oswald",sans-serif;
    line-height: 1.2;
    margin-bottom: 30px;
`;

export const Button = styled.button`
    font-family: "Oswald",sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    padding: 0 30px;
    background-color: #080808;
    border: 1px solid hsla(0,0%,40%,.8);
        
        &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.98);
            transition: 0.5s;
        }
`;

