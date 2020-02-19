import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {DOWNLOAD_EXCEL_FILE} from './constants';
import LeadService from '../../services/api/leadService';
import {hideImportModal} from './actions';

function* downloadImportModal(action) {
    try {
        yield call(LeadService.importLead, (action.payload.importObj));
        yield put(hideImportModal());
    } catch(e) {
        console.log('error');
    }


}

function* ImportModalWatcher() {
    yield all([
        takeLatest(DOWNLOAD_EXCEL_FILE, downloadImportModal),
    ]);
}

export default ImportModalWatcher;
