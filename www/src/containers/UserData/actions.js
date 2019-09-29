import {GET_CURRENT_USER} from './constants';

const getCurrentUser = (token) => {
    return {
        type: GET_CURRENT_USER,
        payload: {
            token
        }
    }
}

export {
    getCurrentUser
}