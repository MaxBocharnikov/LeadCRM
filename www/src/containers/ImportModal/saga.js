import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import LeadService from '../../services/api/leadService';
import {hideImportModal, setErrorStatus, setLoadingStatus} from './actions';
import {ADD_LEADS_BY_IMPORT} from './constants';
import {fetchLeadList} from '../LeadList/actions';

function* addLeadsByImport(action) {
    try {
        yield put(setLoadingStatus(true));
        yield call(LeadService.addLeadsByImport, (action.payload.data));
        yield put(setLoadingStatus(false));
        yield put(fetchLeadList());
        yield put(hideImportModal());
    } catch(e) {
        console.log('error', e);
        yield put(setLoadingStatus(false));
        yield put(setErrorStatus(true));
    }


}

function* ImportModalWatcher() {
    yield all([
        takeLatest(ADD_LEADS_BY_IMPORT, addLeadsByImport),
    ]);
}

export default ImportModalWatcher;
