import styled from "styled-components"

export const Wrapper = styled.div`
`;

export const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #111111;
    
    @media(max-width:764px) {
      flex-direction: column;
    } 
`;
export const Info = styled.div`
    align-items: center;
    padding: 90px 70px;
    font-family: "Heebo",sans-serif;
    font-size: 1rem;
    text-align: left;
    width: 60%;

    @media(max-width:764px) {
        align-items: flex-start;
        padding: 30px;
        width: 100%;
    } 


`;
export const ContainerTitle = styled.div`
    font-family: "Heebo",sans-serif;
    margin-bottom: 30px;
    background-color: #111111;

    @media(max-width:764px) {
      margin-bottom: 10px;
    } 
`;



export const SubTitle = styled.span`
    color: #ddd;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: "Heebo",sans-serif;
    line-height: 1.5;

`;

export const Title = styled.h2`
    font-family: "Oswald",sans-serif;
    font-size: 36px;
    font-weight: 700;
    padding-bottom: 20px;
    margin-bottom: 50px;
    margin-top: 15px;
    display: flex;

    @media(max-width:764px) {
      margin-bottom: 10px;
    } 
`;

export const WrapperPhoto = styled.div`
    width: 30%;
    position: relative;
    margin: 20px 90px 20px 0;
    align-items: center;

    @media(max-width:764px) {
      width: 100%;
    } 
`;

export const BorderPhoto = styled.div`
    border: 1px solid #FFD1AA;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;

    @media(max-width:764px) {
        height: auto;
        position: relative;
    } 
`;

export const Photo = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Main = styled.p`
    color: #999;
    line-height: 1.7rem;
    margin-bottom: 20px;
    color: #fff;
    font-family: "Heebo",sans-serif;
    font-weight: 100;
    
`;

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
        
        &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.98);
            transition: 0.5s;
        } 
`;


