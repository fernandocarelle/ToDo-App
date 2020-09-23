import styled from 'styled-components';

export const Container = styled.div `

    width: 240px;
    height: 50px;
    background: ${props => props.actived ?  '#F4A261' : '#2A9D8F' };
    padding: 10px;
    
    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    cursor: pointer;

    img {
        width: 25px;
        height: 25px;

    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #F4A261;
    }
   
`;