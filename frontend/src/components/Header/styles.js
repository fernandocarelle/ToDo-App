import styled from 'styled-components';

export const Container = styled.div `

    width: 100%;
    height: 70px;
    background: #2A9D8F;
    border-bottom: 5px solid #F4A261;

    display: flex;

`;
export const LeftSide = styled.div `

    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 100px;
        height: 40px;
    }

    @media (max-width: 399px) {
        
        img {
            width: 70px;
            height: 30px;

        };
    }
    }

`;
export const RightSide = styled.div `

    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a, button {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;


        &:hover {
            color: #F4A261;
        }
    }

    button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
        }

    #notification {
        img {
            width: 25px;
            height: 30px;

        };

        span {
            background: #fff;
            color: #F4A261;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover {
            opacity: .5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #fff;
    }

    button {
        font-size: 16px;
    }

    @media (min-width: 580px;) and ( max-width: 680px) {
        a {
            font-size: 12px;
        }
        #notification {
        img {
            width: 20px;
            height: 25px;

        };
    }
    }

    @media (max-width: 538px) and (max-width: 579px) {
        margin-right: 2px;
        a {
            font-size: 8px;
        }
        #notification {
        img {
            width: 15px;
            height: 20px;

        };
    }
    }
    @media (max-width: 538px) {

        margin-right: 2px;

        a {
            font-size: 8px;
        }
        #notification {
        img {
            width: 15px;
            height: 20px;

        };
        
    }
    .dividir::after {
        content: "";
        margin: 0 3px;
        color: #fff;
    }
    }
`;