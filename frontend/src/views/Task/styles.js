import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div `
    width: 50%;
    border-bottom: 70px;
    
`;

export const TypeIcons = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    .inative {
        opacity: 0.5;
    }

    button {
        border: none;
        background: none;
        outline: none;
    }

    img {
        width: 30px;
        height: 30px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    }
`;

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    span {
        color: #707070;
        margin: 5px 0px;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #F4A261;
        outline: none;
    }

`;

export const TextArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    span {
        color: #707070;
        margin: 5px 0px;
    }

    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #F4A261;
        border-radius: 5px;
        outline: none;
    }
`;

export const Options = styled.div `
    display: flex;
    justify-content: space-between;
    

    button {
        font-weight: bold;
        color: #2A9D8F;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #F4A261;
        font-weight: bold;
        font-size: 18px;
    }


    
`;

export const Save = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 70px;

    button {
        width:100%;
        border: none;
        background: #F4A261;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        padding: 20px;
        outline: none;
        border-radius: 30px;
        color: #fff;

        &:hover {
            opacity: 0.7;
        }
    }

`;