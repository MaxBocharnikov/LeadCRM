
import {HIDE_IMPORT_MODAL, SHOW_IMPORT_MODAL} from './constants';

const initialState = {
    isImportModalShown: false
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
                isImportModalShown: false
            }
        }

        default: {
            return state
        }
    }
}