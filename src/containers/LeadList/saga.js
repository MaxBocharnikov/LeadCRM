import { all, call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_LEAD_LIST} from "./constants";
import LeadService from "../../services/leadService";
import {hideListSpinner, saveLeadList, showListSpinner} from './actions';


const leadService = new LeadService();

function* fetchLeadList() {
    yield put (showListSpinner());
    const result = yield call(leadService.getLeadList);
    yield put(saveLeadList(result));
    yield put (hideListSpinner())
}

function* leadListWatcher() {
    yield all([
        takeLatest(FETCH_LEAD_LIST, fetchLeadList),
    ]);
}

export default leadListWatcher;
