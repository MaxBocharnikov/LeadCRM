import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_LEAD_LIST} from "./constants";
import LeadService from "../../services/leadService";
import {saveLeadList} from './actions';


const leadService = new LeadService();

function* fetchLeadList() {
    const result = yield call(leadService.getLeadList);
    yield put(saveLeadList(result));
}

function* leadListWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_LIST, fetchLeadList),
    ]);
}

export default leadListWatcher;
