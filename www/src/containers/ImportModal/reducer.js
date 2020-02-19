import {HIDE_IMPORT_MODAL, SET_ERROR_STATUS, SHOW_IMPORT_MODAL} from './constants';

const initialState = {
    isImportModalShown: false,
    importError: false
};

export const ImportModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_IMPORT_MODAL: {
            return {
                ...state,
                isImportModalShown: true
            }
        }

        case HIDE_IMPORT_MODAL: {
            return {
                ...state,
                isImportModalShown: false,
                importError: false,
            }
        }

        case SET_ERROR_STATUS: {
            return {
                ...state,
                importError: action.payload.status
            }
        }

        default: {
            return state
        }
    }
}