import {LOGOUT, ON_ERROR_LOGIN, ON_SUCCESS_LOGIN} from './constants';

const initialState = {
    isAuth: false,
    isError: false
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case ON_SUCCESS_LOGIN: {
            return {
                ...state,
                isAuth: true
            }
        }

        case ON_ERROR_LOGIN: {
            return {
                ...state,
                isError: true
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }

        default: {
            return state
        }
    }
};