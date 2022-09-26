import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "../components/routes/Router"
import {useTheme} from '../contexts/ThemeContext/useTheme'
import { AuthenticationProvider } from "../contexts/Authentication/AuthenticationProvider"
import { ModalProvider } from "../contexts/Modal/ModalProvider"
import { GlobalStyles } from "../styles/GlobalStyles"


export const Layout = () => {

    const {theme} = useTheme()

    return(
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <BrowserRouter>
                    <AuthenticationProvider>
                        <GlobalStyles/>
                        <Router/>
                    </AuthenticationProvider>
                </BrowserRouter>
            </ModalProvider>
        </ThemeProvider>
    )
}