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
`;


export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: row;
    background-color: #202020;
    position: relative;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    width: auto;
    max-width: 24.375rem;
    height: 400px;
    object-fit: cover;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        max-width: 100%;
        filter: grayscale(100%);

        :hover {
            filter: grayscale(0%);
        }
      
    }
`;




