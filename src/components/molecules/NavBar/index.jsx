import { Logo } from '../../atoms/Logo'
import { Nav } from './styles'
import { NavItem } from '../../atoms/NavItem'

import PropTypes from 'prop-types';

export const NavBar = () => {

    return(
        <Nav>
            <div>
                <Logo/>
            </div>
            <ul>
                <NavItem text="Início"/>
                <NavItem text="Dispositivos" link="/devices"/>
                <NavItem text="Perfil" link="/me"/>
            </ul>
        </Nav>
    )
}

NavBar.propTypes = {
    isLogged: PropTypes.bool,
}