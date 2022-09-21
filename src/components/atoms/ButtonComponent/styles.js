import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    width: 130px;
    min-height: 40px;
    border-radius: 3px;
    border: ${({highlight}) => highlight ? "none" : "1px solid #3e5055"};
    color: ${({highlight}) => highlight ? "#fff" : "#3e5055"};
    background-color: ${({highlight}) => highlight ? "#00A335" : "#fff"};

    &:hover{
        background-color: ${({highlight}) => highlight ? "#00863F" : "#ebeeee"};
    }

`