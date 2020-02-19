import {DOWNLOAD_EXCEL_FILE, HIDE_IMPORT_MODAL, SHOW_IMPORT_MODAL} from './constants';

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

const downLoadExcelFile = (importObj) => {
    return {
        type: DOWNLOAD_EXCEL_FILE,
        payload: {
            importObj
        }
    }
}

export {
    showImportModal,
    hideImportModal,
    downLoadExcelFile
}


