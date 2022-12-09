import styled from "styled-components"


export const Wrapper = styled.div`
    width: 100%;
    height: 713px;
    background-color: #0a0a12;
`;

export const ContainerMenu = styled.div`
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
    font-family: 'Great Vibes', cursive;
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
        color: #fffafa;
        letter-spacing: .1rem;
        transition: .1s;
    }

    @media(max-width:764px) {
        font-size: 0.8rem;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    padding: 150px 70px;
    margin: 100px 0;

    @media(max-width:764px) {
        margin-top: 30px;
        margin-top: 80px;
        padding: 50px 20px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
    }
`;

export const Title = styled.h1`
    @media(max-width:764px) {
        font-size:1.2rem;
        letter-spacing: 4px;
    } 
`;

export const Subtitle = styled.h2` 
    @media(max-width:764px) {
        font-size:0.6rem;
        letter-spacing: 6px;
    } 
`;

