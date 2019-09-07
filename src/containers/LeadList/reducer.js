import {SAVE_LEAD_LIST} from "./constants";

const initialState = {
    list: [],
};

export const LeadListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEAD_LIST: {
            return {
                ...state,
                list: action.payload.list
            }
        }

        default: {
            return state;
        }
    }
};
