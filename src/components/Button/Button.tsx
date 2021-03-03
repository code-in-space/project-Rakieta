import styled, {css, StyledComponent} from "styled-components";

interface ButtonProps {
     secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: blue;
    color: white;
    border: none;
    width: 200px;
    height: 80px;
    transition: 0.2s;
    margin: 10px;
    
    &:hover{
            background: transparent;
            color: blue
        }

    ${props => props.secondary && css`
        background: transparent;
        color: blue;

        &:hover{
            background: blue;
            color: white
        }
    `}
`;

export default Button;