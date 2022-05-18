import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #202020;   
    width: 100%;
    height: auto;
    padding: 50px 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;  
`;

export const Title = styled.div`
    color: #ddd;
    margin-bottom: 10px;
    text-align: center;
`;

export const SubTitle = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
    position: relative;
    color: #fff;
    margin: 0 0 50px;
    font-family: "Oswald",sans-serif;
    line-height: 1.2;
    
    @media(max-width:764px) {
      font-size: 2rem;
    } 
`;


export const Container = styled.div`
    background-color: #202020;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: row;
    position: relative;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    width: auto;
    max-width: 390px;
    height: 400px;
    

    img {
        width: 360px;
        height: 380px;
        max-width: 100%;
        filter: grayscale(100%);
        object-fit: cover;

        :hover {
            filter: grayscale(0%);
        }
      
    }
`;




