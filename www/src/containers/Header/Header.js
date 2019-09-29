import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import {logout} from '../Auth/action';

function mapStateToProps(state) {
    return {
        worker: state.userData.worker
    }
}


function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
