import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #191d3a;
    width: 100%;
    height: 450px;
    padding: 50px 70px;
    display: flex;
    flex-direction: row;
    
    @media(max-width:764px) {
      flex-direction: column;
      padding: 20px 30px;
    } 
`;
export const Contacts = styled.div`
    width: 40%;
    @media(max-width:764px) {
      width: 100%;
    } 
`;
export const DivForm = styled.div`
    width: 60%;
`;
export const Title = styled.h2`
    font-family: "Oswald",sans-serif;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #fff;
    line-height: 1.2;
`;
export const SubTitle = styled.h3`
    margin-bottom: 2px;
    font-family: "Oswald",sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    text-align: left;
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 1px;
    color: #bbb;
    line-height: 20px;
    margin-bottom: 1.5rem;
`;
export const wrapperButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: flex-end;

    @media(max-width:764px) {
      justify-content: center;
    } 
`;
