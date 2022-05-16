import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #111111;
    width: 100%;
    height: 450px;
    padding: 50px 70px;
    display: flex;
    flex-direction: row;
`;
export const Contacts = styled.div`
    width: 40%;
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
`;
export const Button = styled.a`
    text-decoration: none;
    font-family: "Oswald",sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    padding: 10px 30px;
    margin-bottom: 40px;
    text-align: center;
    background-color: #080808;
    border: 1px solid hsla(0,0%,40%,.8);
        
        &:hover {
            cursor: pointer;
            background-color: rgba(100, 82, 66.7, 0.98);
            transition: 0.5s;
        }
`;
