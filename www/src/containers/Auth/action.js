import {LOGIN, ON_ERROR_LOGIN, ON_SUCCESS_LOGIN} from './constants';

const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
};

const onSuccessLogin = () => {
    return {
        type: ON_SUCCESS_LOGIN
    }
};

const onErrorLogin = () => {
    return {
        type: ON_ERROR_LOGIN
    }
}

export {
    login,
    onSuccessLogin,
    onErrorLogin
}