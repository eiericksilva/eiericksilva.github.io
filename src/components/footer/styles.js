import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #202020;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;

    svg {
        width: 40px;
        height: 40px;
        margin: 10px;

        :hover {
            cursor: pointer;
        }
    }
   
`;

export const Copy = styled.p`
    font-size: 0.8rem;
`;