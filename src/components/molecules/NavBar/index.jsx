import { Logo } from '../../atoms/Logo'
import { Nav } from './styles'
import { NavItem } from '../../atoms/NavItem'
import Switch from 'react-switch';
import { useTheme } from '../../../contexts/ThemeContext/useTheme';

import PropTypes from 'prop-types';

export const NavBar = () => {

    const {changeTheme, theme, switchState} = useTheme();

    return(
        <Nav>
            <div className='logo-container'>
                <Logo/>
            </div>
            <ul>
                <NavItem text="Início" link="/"/>
                <NavItem text="Dispositivos" link="/devices"/>
                <NavItem text="Perfil" link="/me"/>
                <li>
                    <div className='switch-container'>
                        <img src="https://cdn-icons-png.flaticon.com/512/606/606795.png" alt="sun icon" />

                        <Switch
                        onChange={changeTheme} 
                        checked={switchState} 
                        uncheckedIcon={false} 
                        checkedIcon={false}
                        onColor={theme.SwitchColors.switchColor}
                        offColor={theme.SwitchColors.switchColor}
                        offHandleColor={theme.SwitchColors.handleColor}
                        onHandleColor={theme.SwitchColors.handleColor}
                        activeBoxShadow={null}
                        handleDiameter={22}
                        className="switch"
                        />

                        <img src="https://cdn-icons-png.flaticon.com/512/1812/1812717.png" alt="moon icon" />
                    </div>
                </li>
            </ul>
        </Nav>
    )
}

NavBar.propTypes = {
    isLogged: PropTypes.bool,
}