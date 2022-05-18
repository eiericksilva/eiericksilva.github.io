import styled from "styled-components"


export const Wrapper = styled.div`
    width: 100%;
    height: 713px;
    background-color: #080808;
`;

export const ContainerMenu = styled.div`
    background-color: #080808;
    width: 100%;
    height: auto;
    display: flex;
    justify-content:space-around;
    border-bottom: 1px solid #FFD1AA ;
    
    @media(max-width:764px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled.h3`
    font-family: "Heebo",sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 8px; 
`;
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: auto;

    @media(max-width:764px) {
        flex-direction: column;
    }
`;

export const Item = styled.li`
    padding: 10px;
    color: white;
    list-style: none;

`;

export const Link = styled.a`
    text-decoration: none;
    background-color: transparent;
    color: white;
    font-size: 15px;
    font-weight: 100;

    :hover {
        font-weight: 600;
        cursor: pointer;
        color: rgba(100, 82, 66.7, 1);
        letter-spacing: 0.2rem;
        transition: 0.2s;
    }

    @media(max-width:764px) {
        font-size: 0.8rem;
    }
`;

export const Main = styled.main`
    background-color: #080808;
    width: 100%;
    height: 100%;
    padding: 150px 70px;
    margin: 100px 0;
    font-family: "Heebo",sans-serif;

    @media(max-width:764px) {
        margin-top: 30px;
        margin-top: 80px;
        padding: 50px 20px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
    }
`;

export const Subtitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 8px;  
    
    @media(max-width:764px) {
        font-size:0.6rem;
        letter-spacing: 6px;
    } 
`;

export const Title = styled.h2`
    font-size: 4rem;
    letter-spacing: 4px;
    font-weight: 700;
    font-family: "Oswald",sans-serif;
    line-height: 1.2;
    margin-bottom: 30px;

    @media(max-width:764px) {
        font-size:1.2rem;
        letter-spacing: 4px;
    } 
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

        
        a {
            text-decoration: none;
        }
        
        &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.98);
            transition: 0.5s;
        }
`;

