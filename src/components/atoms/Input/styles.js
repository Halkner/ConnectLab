import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    padding: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.3);

    &:focus, &:hover{
        border-color: #00a335;
    }
`