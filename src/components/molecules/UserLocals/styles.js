import styled from "styled-components";
import { useAuth } from "../../../contexts/Authentication/useAuth";

export const StyledFilter = styled.ul`
    width: 90%;
    display: flex;
    gap: 30px;
    margin-top: 4em;
`

export const StyledItemFilter = styled.li`
    color: ${({theme}) => theme.colors.fontColor};
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 3px;
    width: 80px;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    
    
    .active{
        background-color: ${({theme}) => theme.colors.borderColor};
    }
    
    &:hover{
        background-color: ${({theme}) => theme.colors.borderColor}
    }
`