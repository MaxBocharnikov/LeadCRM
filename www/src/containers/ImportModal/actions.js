import {ADD_LEADS_BY_IMPORT, HIDE_IMPORT_MODAL, SET_ERROR_STATUS, SHOW_IMPORT_MODAL} from './constants';

const showImportModal = () => {
    return {
        type: SHOW_IMPORT_MODAL
    }
};

const hideImportModal = () => {
    return {
        type: HIDE_IMPORT_MODAL
    }
};

const addLeadsByImport = (data) => {
    return {
        type: ADD_LEADS_BY_IMPORT,
        payload: {
            data
        }
    }
};

const setErrorStatus = status => {
    return {
        type: SET_ERROR_STATUS,
        payload: {
            status
        }
    }
};
export {
    showImportModal,
    hideImportModal,
    addLeadsByImport,
    setErrorStatus
}


