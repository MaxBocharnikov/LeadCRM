import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_LEAD_DETAIL} from "./constants";
import LeadService from "../../services/leadService";
import {saveLeadDetail} from './actions';


const leadService = new LeadService();

function* fetchLeadDetail(action) {
    const result = yield call(leadService.getLeadById, action.payload.id);
    yield put(saveLeadDetail(result));
}

function* leadDetailWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_DETAIL, fetchLeadDetail),
    ]);
}

export default leadDetailWatcher;
