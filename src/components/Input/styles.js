import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    padding: 5px;
    margin: 1rem 0 3rem 0;
    border-style: ridge;
    border-color: rgba(0, 0, 0, 0.3);

    &:focus, &:hover{
        border-color: #00a335;
    }
`