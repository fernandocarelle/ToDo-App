import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    overflow: auto;
`;

export const FilterArea = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    flex-wrap: wrap;

    button {
        
        border: none;
        outline: none;
        background: transparent;
    }
    
`;

export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;

    a {
        text-decoration: none;
        color: #000;
    }
`;

export const Title = styled.div `
    width: 100%;
    border-bottom: 1px solid #2A9D8F;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    h3 {
        color: #2A9D8F;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 20px;
    }
`;
