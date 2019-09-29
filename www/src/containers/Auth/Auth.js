import {connect} from 'react-redux';
import {login, onSuccessLogin} from './action';
import Auth from '../../components/Pages/Auth/Auth';

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        isError: state.auth.isError
    }
}

function mapDispatchProps(dispatch) {
    return {
        login: (data) => dispatch(login(data)),
        onSuccessLogin: () => dispatch(onSuccessLogin())
    }
}


const AuthContainer = connect(mapStateToProps, mapDispatchProps)(Auth);

export default AuthContainer;