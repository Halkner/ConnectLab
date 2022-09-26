import { StyledSpinner } from "./styles"

export const Loading = () => {
    return(
        <StyledSpinner>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyledSpinner>
    )
}