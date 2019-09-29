import {SAVE_WORKER} from './constants';

const initialState = {
    worker: null
};

export const UserDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_WORKER: {
            return {
                ...state,
                worker: action.payload
            }
        }

        default: {
            return state
        }
    }
};