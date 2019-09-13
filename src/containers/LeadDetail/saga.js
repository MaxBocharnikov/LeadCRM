import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_LEAD_DETAIL} from "./constants";
import LeadService from "../../services/leadService";
import {hideSpinner, saveLeadDetail, showModal, showSpinner} from './actions';


const leadService = new LeadService();

function* fetchLeadDetail(action) {
    yield put(showSpinner());
    const result = yield call(leadService.getLeadById, action.payload.id);
    yield put(saveLeadDetail(result));
    yield put (hideSpinner());
    yield put (showModal());
}

function* leadDetailWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_DETAIL, fetchLeadDetail),
    ]);
}

export default leadDetailWatcher;
