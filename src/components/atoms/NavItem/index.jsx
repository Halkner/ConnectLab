import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ItemMenu } from './styles';

export const NavItem = props => {
    return(
        <ItemMenu>
            <Link to={props.link}>
                {props.text}
            </Link>
        </ItemMenu>
    )

}

NavItem.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
}