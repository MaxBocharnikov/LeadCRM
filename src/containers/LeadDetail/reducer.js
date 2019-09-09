import {SAVE_LEAD_DETAIL} from "./constants";

const initialState = {
    lead: null
};

export const LeadDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEAD_DETAIL: {
            return {
                ...state,
                lead: action.payload.lead
            }
        }

        default: {
            return state;
        }
    }
};
