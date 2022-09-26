import { StyledFilter, StyledItemFilter } from "./styles"
import { useAuth } from "../../../contexts/Authentication/useAuth";

export const UserLocals = () => {

    const {handleFilter, filter} = useAuth();

    const setActive = (query) => {
        if(filter === query){
            return true
        }else{
            return false;
        }
    }

    return(
        <StyledFilter>
            <StyledItemFilter className={filter === "Casa" ? "active" : undefined} onClick={() => handleFilter("Casa")}>
                Casa
            </StyledItemFilter>
            <StyledItemFilter className={filter === "Escritório" ? "active" : undefined} onClick={() => handleFilter("Escritório")}>
                Escritório
            </StyledItemFilter>
            <StyledItemFilter className={filter === "Fábrica" ? "active" : undefined} onClick={() => handleFilter("Fábrica")}>
                Fábrica
            </StyledItemFilter>
        </StyledFilter>
    )
}