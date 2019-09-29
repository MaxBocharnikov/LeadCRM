import {HIDE_LIST_SPINNER, SAVE_LEAD_LIST, SHOW_LIST_SPINNER} from "./constants";

const initialState = {
    list: [],
    spinner: true
};

export const LeadListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEAD_LIST: {
            return {
                ...state,
                list: action.payload.list
            }
        }

        case SHOW_LIST_SPINNER: {
            return {
                ...state,
                spinner: true
            }
        }

        case HIDE_LIST_SPINNER: {
            return {
                ...state,
                spinner: false
            }
        }

        default: {
            return state;
        }
    }
};
