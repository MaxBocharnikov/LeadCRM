import {HIDE_IMPORT_MODAL, SET_ERROR_STATUS, SET_LOADING_STATUS, SHOW_IMPORT_MODAL} from './constants';

const initialState = {
    isImportModalShown: false,
    importError: false,
    loading: false
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

        case SET_LOADING_STATUS: {
            return {
                ...state,
                loading: action.payload.status
            }
        }

        default: {
            return state
        }
    }
}