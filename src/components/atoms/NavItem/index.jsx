import PropTypes from 'prop-types';
import { ItemMenu } from './styles';

export const NavItem = props => {
    return(
        <ItemMenu>
            {props.text}
        </ItemMenu>
    )

}

NavItem.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
}