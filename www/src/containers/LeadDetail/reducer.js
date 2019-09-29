import {HIDE_MODAL, HIDE_MODAL_SPINNER, SAVE_LEAD_DETAIL, SHOW_MODAL, SHOW_MODAL_SPINNER} from "./constants";

const initialState = {
    spinner: false,
    modal: false,
    lead: null
};

export const LeadDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LEAD_DETAIL: {
            return {
                ...state,
                lead: action.payload.lead,
            }
        }

        case SHOW_MODAL_SPINNER: {
            return {
                ...state,
                spinner: true
            }
        }

        case SHOW_MODAL: {
            return {
                ...state,
                modal: true
            }
        }

        case HIDE_MODAL_SPINNER: {
            return {
                ... state,
                spinner: false
            }
        }

        case HIDE_MODAL: {
            return {
                ...state,
                modal: false,
                lead: null
            }
        }


        default: {
            return state;
        }
    }
};
