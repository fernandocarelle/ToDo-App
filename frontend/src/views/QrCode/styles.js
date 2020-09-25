import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Content = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;


    h1 {
        color:#F4A261;
    }

    p {
        color: #2A9D8F;
    }

`;

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
        outline: none;
    }

    button {
        font-weight: bold;
        background: #F4A261;
        color: #fff;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        outline: none;

        &:hover {
            background: #2A9D8F;
        }
    }

`;