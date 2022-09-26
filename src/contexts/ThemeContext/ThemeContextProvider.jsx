import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DarkTheme } from '../../themes/DarkTheme';
import { LightTheme } from '../../themes/LightTheme';
import { ThemeContext } from './ThemeContext.';

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");
    const [switchState, setSwitchState] = useState(false);

    useEffect(()=>{
        const recoveredTheme = sessionStorage.getItem("theme")
        if(recoveredTheme){
            setTheme(recoveredTheme);
            
            if(recoveredTheme === "dark"){
                setSwitchState(true);
            }else{
                setSwitchState(false);
            }
        }
    },[])
    const changeTheme = () => {
        if (theme === "dark"){
            setTheme("light");
            sessionStorage.setItem("theme", "light")
            setSwitchState(false);
        }else{
            setTheme("dark");
            sessionStorage.setItem("theme", "dark")
            setSwitchState(true);
        }
    }
    return(
        <ThemeContext.Provider value={{changeTheme, switchState, theme: (theme === "dark" ? DarkTheme : LightTheme)}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node
}